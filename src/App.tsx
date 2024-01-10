import React, {useRef, useState} from "react";
import * as Types from "iled/dist/types";
import * as ILED from "iled/dist/modules/iled";
import * as Option from "fp-ts/Option";
import * as TE from "fp-ts/TaskEither";

import {pipe} from "fp-ts/function";
import cn from "classnames";
import {useClickAway} from "react-use";

import {Book as BookT} from "./entities/book/book";
import {BookReview as BookReviewT} from "./entities/bookReview/bookReview";
import {emulateBooksGetting} from "./api-emulation/books";
import {emulateBookReviewsGetting} from "./api-emulation/reviews";

import "./App.css";
import {Books} from "./entities/book/ui/Books";
import {NonEmptyArray} from "fp-ts/NonEmptyArray";
import {BookReviews} from "./entities/bookReview/ui/BookReviews";

type HarryPotterBooks = Types.ILED<
    null,
    null,
    BooksUploadingError,
    {
        books: Array<BookT>;
        selectedBook: Option.Option<{
            id: BookT["id"];
            title: BookT["title"];
            reviews: Types.ILED<
                null,
                null,
                BookReviewsUploadingError,
                Array<BookReviewT>
            >;
        }>;
    }
>;

type BooksUploadingError = string;
type BookReviewsUploadingError = string;

const initialState: HarryPotterBooks = ILED.initialOf(null);

const Initial: React.FC<{ loadBooks: () => void }> = ({loadBooks}) => (
    <div className="initial-state">
        <button onClick={loadBooks}>Get books</button>
    </div>
);

const Loading = () => (
    <div className="loading-state">
        <img
            src="https://media4.giphy.com/media/ZBQ3ouQgaHVSzw9sDa/giphy.gif?cid=6c09b952d62m46te52ilshv4o58nhufla7b7ab7ipzz7dvsa&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            alt="loader"
        />
    </div>
);

const ErrorMessage: React.FC<{ errorMessage: string; retry: () => void }> = ({
                                                                                 errorMessage,
                                                                                 retry,
                                                                             }) => (
    <div className="error-state">
        <p>{errorMessage}</p>
        <div>
            <img
                src="https://www.grunge.com/img/gallery/tragic-details-about-the-harry-potter-cast/l-intro-1641574509.jpg"
                alt="error"
            />
        </div>
        <button onClick={retry}>Retry</button>
    </div>
);

const EmptyErrorMessage: React.FC<{ errorMessage: string; }> = ({
                                                                    errorMessage,
                                                                }) => (
    <div className="error-state">
        <p>{errorMessage}</p>
        <div>
            <img
                src="https://i.pinimg.com/1200x/f3/3f/c9/f33fc91e2af1d27df16fbb4bdee5dc91.jpg"
                alt="No books"/>
        </div>
    </div>
);

const parseNonEmptyArray = <A, >(xs: Array<A>): Option.Option<NonEmptyArray<A>> => {
    if (xs.length > 0) {
        return Option.some(xs as NonEmptyArray<A>);
    }

    return Option.none;
}

export default function App() {
    const [state, setState] = useState<HarryPotterBooks>(initialState);

    const unselectBook = () => {
        setState((prevState) =>
            ILED.dataEndomorphism(prevState, ({books}) => ({
                books,
                selectedBook: Option.none,
            }))
        );
    };

    const ref = useRef(null);

    useClickAway(ref, unselectBook);

    const loadBooks = () => {
        setState(ILED.loadingOf(null));

        pipe(
            emulateBooksGetting(),
            TE.match(
                (error) => setState(ILED.errorOf(error)),
                (books) =>
                    setState(
                        ILED.dataOf({
                            books,
                            selectedBook: Option.none,
                        })
                    )
            )
        )();
    };

    const loadBookReviews = ({id, title}: Pick<BookT, 'id' | 'title'>) => () => {
        setState((prevState) =>
            ILED.dataEndomorphism(prevState, ({books}) => ({
                books,
                selectedBook: Option.some({
                    id,
                    title,
                    reviews: ILED.loadingOf(null),
                }),
            }))
        );

        pipe(
            emulateBookReviewsGetting({id, title}),
            TE.match(
                (error) =>
                    setState((prevState) =>
                        ILED.dataEndomorphism(prevState, ({books}) => ({
                            books,
                            selectedBook: Option.some({
                                id,
                                title,
                                reviews: ILED.errorOf(error),
                            }),
                        }))
                    ),
                (reviews) =>
                    setState((prevState) =>
                        ILED.dataEndomorphism(prevState, ({books}) => ({
                            books,
                            selectedBook: Option.some({
                                id,
                                title,
                                reviews: ILED.dataOf(reviews),
                            }),
                        }))
                    )
            )
        )();
    };

    return (
        <div className="App">
            <h1 className="title">Harry Potter books</h1>

            <ILED.DetailedFolding
                state={state}
                onInitial={() => <Initial loadBooks={loadBooks}/>}
                onLoading={Loading}
                onError={(errorMessage) => (
                    <ErrorMessage errorMessage={errorMessage} retry={loadBooks}/>
                )}
                onData={({books, selectedBook}) => {
                    const parsedBooks = parseNonEmptyArray(books);

                    return (
                        <>
                            {pipe(
                                parsedBooks,
                                Option.fold(
                                    () => (
                                        <EmptyErrorMessage errorMessage="No books"/>
                                    ),
                                    (books) => (
                                        <Books
                                            books={books}
                                            loadBookReviews={loadBookReviews}
                                            selectedBook={pipe(selectedBook, Option.map(book => ({id: book.id})))}
                                        />
                                    )
                                )
                            )}


                            {pipe(
                                selectedBook,
                                Option.fold(
                                    () => null,
                                    () => <div className="covering-layer"/>
                                )
                            )}
                            <div
                                className={cn("reviewsAside", {
                                    opened: Option.isSome(selectedBook),
                                })}
                                ref={ref}
                            >
                                {pipe(
                                    selectedBook,
                                    Option.fold(
                                        () => null,
                                        ({id, title, reviews}) => (
                                            <ILED.DetailedFolding
                                                state={reviews}
                                                onInitial={null}
                                                onLoading={Loading}
                                                onError={(errorMessage) => (
                                                    <ErrorMessage
                                                        errorMessage={errorMessage}
                                                        retry={loadBookReviews({id, title})}
                                                    />
                                                )}
                                                onData={(reviews) => {
                                                    const parsedReviews = parseNonEmptyArray(reviews);
                                                    return pipe(parsedReviews, Option.fold(
                                                        () => <EmptyErrorMessage errorMessage="No reviews for book yet" />,
                                                        (reviews) => <BookReviews reviews={reviews} />
                                                    ));
                                                }}
                                            />
                                        )
                                    )
                                )}
                            </div>
                        </>
                    )
                }}
            />
        </div>
    );
}

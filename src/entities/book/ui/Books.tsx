import {pipe} from "fp-ts/function";
import * as Option from "fp-ts/Option";
import {Book} from "./Book";
import {SelectedBook} from "./SelectedBook";
import React from "react";
import {NonEmptyArray} from "fp-ts/NonEmptyArray";
import {Book as BookT} from "../book";

interface Props {
    books: NonEmptyArray<BookT>;
    loadBookReviews: ({id, title}: Pick<BookT, 'id' | 'title'>) => () => void;
    selectedBook: Option.Option<{
        id: BookT["id"];
    }>;
}

export const Books: React.FC<Props> = ({books, loadBookReviews, selectedBook}) => {
    return (
        <div className="books">
            {books.map((book) =>
                pipe(
                    selectedBook,
                    Option.fold(
                        () => (
                            <Book
                                book={book}
                                select={loadBookReviews({id: book.id, title: book.title})}
                                key={book.id}
                            />
                        ),
                        (selectedBook) => book.id === selectedBook.id
                            ? <SelectedBook book={book} key={book.id}/>
                            : <Book
                                book={book}
                                select={loadBookReviews({id: book.id, title: book.title})}
                                key={book.id}
                            />
                    )
                )
            )}
        </div>
    )
}
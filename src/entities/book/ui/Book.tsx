import { Book as BookT } from "../book";

export const Book: React.FC<{ book: BookT; select: () => void }> = ({
                                                                        book,
                                                                        select
                                                                    }) => (
    <div className="book" onClick={select}>
        <h3>{book.title}</h3>
        <div className="book-image-container">
            <img className="book-image" src={book.coverSrc} alt="cover" />
        </div>
    </div>
);

import cn from "classnames";
import { Book as BookT } from "../book";
export const SelectedBook: React.FC<{ book: BookT }> = ({ book }) => (
    <div className={cn("book", "selected")}>
        <h3>{book.title}</h3>
        <div className="book-image-container">
            <img className="book-image" src={book.coverSrc} alt="cover" />
        </div>
    </div>
);

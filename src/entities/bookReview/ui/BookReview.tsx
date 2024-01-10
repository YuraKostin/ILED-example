import { BookReview as BookReviewT } from "../bookReview";

export const BookReview: React.FC<{ review: BookReviewT }> = ({ review }) => {
    return (
        <div className="review">
            <h5 className="review-author">{review.author}</h5>
            <p className="review-text">{review.text}</p>
        </div>
    );
};

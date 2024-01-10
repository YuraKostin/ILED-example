import {BookReview} from "./BookReview";
import {BookReview as BookReviewT} from "../bookReview";
import React from "react";
import {NonEmptyArray} from "fp-ts/NonEmptyArray";

interface Props {
    reviews: NonEmptyArray<BookReviewT>;
}

export const BookReviews: React.FC<Props> = ({reviews}) => {
    return (
        <div className="reviews">
            <h2 className="title">Reviews</h2>
            {reviews.map((review) => (
                <BookReview review={review}/>
            ))}
        </div>
    )
}
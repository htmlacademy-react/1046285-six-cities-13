import React, { ChangeEvent } from 'react';

import { REVIEW_RATING_LEVELS } from '../../const';

type ReviewsRatingProps = {
  currentRating: number;
  onChangeRating: (rating: number) => void;
};

const ReviewsRating = ({onChangeRating, currentRating}: ReviewsRatingProps) => {
  const handleRating = ({target}: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(target.value);

    onChangeRating(rating);
  };

  return (
    <div
      className="reviews__rating-form form__rating"
      onChange={handleRating}
    >
      {
        REVIEW_RATING_LEVELS.map((ReviewRating) => {
          const { value, title } = ReviewRating;
          const id = value < 2 ? `${value}-star` : `${value}-stars`;

          return (
            <React.Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={id}
                type="radio"
                defaultChecked={currentRating === value}
              />
              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

export { ReviewsRating };

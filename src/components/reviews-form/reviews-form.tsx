import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewValidate } from '../../const';
import { postReviewAction } from '../../store/api-actions';
import { ReviewsRating } from './reviews-rating';
import { store } from '../../store';

export type reviewData = {
  id: string;
  rating: number;
  comment: string;
}

const initialState: reviewData = {
  id: '',
  rating: 0,
  comment: '',
};

const ReviewsForm = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState<reviewData>(initialState);
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);

  const handleComment = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = target.value;
    setReviewData((lastReviewData) => ({...lastReviewData, comment}));
  };

  const handleRating = (rating: number) => {
    setReviewData((lastReviewData) => ({...lastReviewData, rating}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id && reviewData.rating) {
      store.dispatch(postReviewAction({...reviewData, id: id}));
      setReviewData(initialState);
      setWasSubmitted((prevWasSubmitted) => !prevWasSubmitted);
    }
  };

  const isSubmitDisabled = Boolean(
    reviewData.comment.length < ReviewValidate.MinCommentLength ||
    reviewData.rating <= ReviewValidate.MinRating
  );

  return (
    <form
      key={Number(wasSubmitted)}
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewsRating
        key={Number(wasSubmitted)}
        onChangeRating={handleRating}
        currentRating={reviewData.rating}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={reviewData.comment}
        onInput={handleComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">{ReviewValidate.MinCommentLength} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export { ReviewsForm };

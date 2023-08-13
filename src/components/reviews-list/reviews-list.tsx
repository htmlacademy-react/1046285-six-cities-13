import { ReviewsLimit } from '../../const';
import { useAppSelector } from '../hooks';
import { ReviewsItem } from '../reviews-item/reviews-item';
import { ReviewsForm } from '../reviews-form/reviews-form';
import { Review } from '../../types/review';
import { AuthorizationStatus } from '../../const';

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewsList = ({reviews}: ReviewsListProps) => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const sortedReviews = [...reviews].sort((previous, current) => {
    const prevDate = new Date(previous.date).getTime();
    const curDate = new Date(current.date).getTime();

    return curDate - prevDate;
  });

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{sortedReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          sortedReviews.slice(0, ReviewsLimit.maxNumber).map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))
        }
      </ul>
      {
        authStatus === AuthorizationStatus.Auth && <ReviewsForm />
      }
    </section>
  );
};

export { ReviewsList };

import React from 'react';
import classnames from 'classnames';

import Icon from '@duik/icon';

import cls from './star-rating.module.scss';

const rates = [1, 2, 3, 4, 5];

export const StarRating = ({ rating = 5, className, ...rest }) => (
  <div className={classnames(cls['star-rating'], className)} {...rest}>
    {rates.map(r =>
      r <= rating ? (
        <Icon key={r} className={cls['star-rating-fill']}>
          star_fill
        </Icon>
      ) : (
        <Icon key={r}>star</Icon>
      )
    )}
  </div>
);

StarRating.defaultProps = {
  className: null,
  rating: 5
};

export default StarRating;

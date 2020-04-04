import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Avatar } from '@duik/it';
import Icon from '@duik/icon';

import IconText from '../IconText';
import StarRating from '../StarRating';

import cls from './tutorial-list-item.module.scss';

export const TutorialListItem = ({
  duration,
  liked,
  likes,
  comments,
  title,
  description,
  imgUrl,
  className,
  author,
  rating,
  Component,
  ...rest
}) => (
  <Component className={classnames(cls['tutorial-item'], className)} {...rest}>
    <div
      className={cls['tutorial-item-cover']}
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <div className={cls['tutorial-item-content']}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={cls['tutorial-item-meta']}>
        <Avatar
          imgUrl={author.imgUrl}
          name={author.name}
          textTop="Created By"
        />
        <IconText icon={<Icon>clock</Icon>}>{duration}</IconText>
      </div>
    </div>
    <div className={cls['tutorial-item-extra']}>
      <div>
        <IconText
          highlight={liked}
          icon={<Icon>{liked ? 'love-fill' : 'love'}</Icon>}
        >
          {likes}
        </IconText>
        <IconText icon={<Icon>message</Icon>}>{comments}</IconText>
      </div>
      {rating && <StarRating rating={rating} />}
    </div>
  </Component>
);

TutorialListItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  author: PropTypes.instanceOf(Object).isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number,
  liked: PropTypes.bool,
  likes: PropTypes.number,
  comments: PropTypes.number,
  Component: PropTypes.any // eslint-disable-line
};

TutorialListItem.defaultProps = {
  className: null,
  duration: null,
  rating: null,
  liked: null,
  likes: 0,
  comments: 0,
  Component: 'div'
};

export default TutorialListItem;

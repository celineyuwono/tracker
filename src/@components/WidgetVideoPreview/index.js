import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import cls from './widget-video-preview.module.scss';

export const WidgetVideoPreview = ({
  className,
  Component = 'a',
  title,
  imgUrl,
  views,
  ...rest
}) => (
  <Component
    className={classnames(cls['card-video-preview'], className)}
    {...rest}
  >
    <div
      className={cls['card-video-preview-image']}
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <div className={cls['card-video-preview-meta']}>
      <h4 className={cls['card-video-preview-title']}>{title}</h4>
      <span className={cls['card-video-preview-views']}>Views: {views}</span>
    </div>
  </Component>
);

WidgetVideoPreview.propTypes = {
  className: PropTypes.string,
  Component: PropTypes.any, // eslint-disable-line
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number
};

WidgetVideoPreview.defaultProps = {
  className: null,
  Component: 'a',
  views: 0
};

export default WidgetVideoPreview;

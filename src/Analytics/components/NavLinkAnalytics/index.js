import * as React from "react";
import classnames from "classnames";

import cls from "./nav-link-2.module.scss";

const NavLinkAnalytics = ({
  rightEl,
  children,
  className,
  highlighted,
  icon,
  Component,
  ...rest
}) => (
  <Component
    className={classnames(cls["nav-link-analytics"], className)}
    {...rest}
  >
    <span className={cls["nav-link-analytics-text"]}>
      {icon && <span className={cls["nav-link-analytics-icon"]}>{icon}</span>}
      {children}
    </span>
    {rightEl && (
      <span className={cls["nav-link-analytics-right-el"]}>{rightEl}</span>
    )}
  </Component>
);

NavLinkAnalytics.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  icon: null,
  children: null,
  Component: "a"
};

export default NavLinkAnalytics;

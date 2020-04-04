import * as React from "react";
import classnames from "classnames";

import cls from "./nav-user.module.scss";

const NavUser = ({
  children,
  className,
  Component,
  name,
  imgUrl,
  textTop,
  ...rest
}) => (
  <div className={classnames(cls["analytics-nav-user"], className)} {...rest}>
    {imgUrl && (
      <div className={cls["analytics-nav-user-avatarWrapper"]}>
        <img
          alt="bob"
          className={cls["analytics-nav-user-avatar"]}
          src={imgUrl}
        />
      </div>
    )}
    {name && <span className={cls["analytics-nav-user-name"]}>{name}</span>}
    {textTop && (
      <span className={cls["analytics-nav-user-textTop"]}>{textTop}</span>
    )}
    {children}
  </div>
);

NavUser.defaultProps = {
  className: null,
  children: null,
  Component: "div",
  name: null,
  imgUrl: null,
  textTop: null
};

export default NavUser;

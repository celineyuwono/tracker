import { createSimpleComponent } from "@duik/it";
import cls from "./nav-link-two-container.module.scss";

export const NavLinkAnalyticsContainer = createSimpleComponent({
  Component: "div",
  className: cls["nav-link-analytics-container"],
  displayName: "NavLinkAnalyticsContainer"
});

export default NavLinkAnalyticsContainer;

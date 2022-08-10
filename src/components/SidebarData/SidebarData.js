import React from "react";
import * as AiIcons from "react-icons/ai";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "navbar__menu-item",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiFillInfoCircle />,
    className: "navbar__menu-item",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillPhone />,
    className: "navbar__menu-item",
  },
  {
    title: "Login",
    path: "/",
    icon: <AiIcons.AiFillRightCircle />,
    className: "navbar__menu-item",
  },
];

export { SidebarData };

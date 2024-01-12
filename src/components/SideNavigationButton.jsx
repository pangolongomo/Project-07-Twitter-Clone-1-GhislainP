import React from "react";
import { NavLink } from "react-router-dom";

function SideNavigationButton({ navigationButton }) {
  const { link, text, icon: Icon } = navigationButton;
  return (
    <li>
      <NavLink to={link} className="flex items-center gap-4 p-1">
        <Icon />
        {text && <span>{text}</span>}
      </NavLink>
    </li>
  );
}

export default SideNavigationButton;

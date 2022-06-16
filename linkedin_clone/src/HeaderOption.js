import { Avatar } from "@mui/material";
import React from "react";

import "./HeaderOptin.css";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon />}

      {avatar && <Avatar className="avatar" src={avatar} />}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;

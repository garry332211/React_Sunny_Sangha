import { Avatar } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ avatar }) => {
  //resuabl functon for recent section
  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const moreDetailes = (items) => (
    <div className="sidebar__recentItems2">
      <span className="sidebar__icon">
        <PeopleAltIcon />
      </span>
      <p>{items}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        {avatar && <Avatar className="sidebar__avatar" src={avatar} />}
        <h2>Gurvinder Singh</h2>
        <h4>gurvindersinghoo7@hotmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile Viewers</p>
          <p className="sidebar__statNumber">1,584</p>
        </div>

        <div className="sidebar__stat">
          <p>Views On posts</p>
          <p className="sidebar__statNumber">2,482</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("webdevelopment")}
        {recentItem("r&d")}
      </div>

      <div className="sidebar__bottom2">
        <p>Followers</p>
        {moreDetailes("Joshp Greenbury")}
        {moreDetailes("Rohit Sharma")}
        {moreDetailes("Connor Hall")}
        {moreDetailes("Matthew Blinkinsop")}

        <span className="more">More..</span>
      </div>
    </div>
  );
};

export default Sidebar;

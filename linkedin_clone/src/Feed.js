import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";

//Icons Imports From Meterial icons.com
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";

const dummyData = [
  {
    message: "Hi Everyone",
  },
  {
    message: "LinkedIn Clone Completed",
  },
];

const Feed = () => {
  const [message, setInput] = useState("");
  const [showMsg, setShowMsg] = useState(dummyData);
  const inputTaker = (event) => {
    setInput(event.target.value);
  };

  //post Handler
  const sendPost = (event) => {
    event.preventDefault();

    console.log(message);
    const data = {
      message,
    };
    if (message) {
      setShowMsg((ls) => [...ls, data]);
      setInput("");
    }
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              type="text"
              placeholder="Start a Post"
              onChange={inputTaker}
              value={message}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputoptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {showMsg.map((a, key1) => (
        <Post
          key={key1}
          message={a.message}
          name="Guri"
          description="gurisran@gmail.comn"
        />
      ))}
    </div>
  );
};

export default Feed;

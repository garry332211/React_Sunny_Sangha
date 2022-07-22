import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

//icons
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={InsertCommentOutlinedIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={IosShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;

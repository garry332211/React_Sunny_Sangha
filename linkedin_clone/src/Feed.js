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
// import {db} from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([
    {name:"Guri Sran",description:"loreemIpsum",message:"What'sUp People"},
    {name:"Guri Sran",description:"loreemIpsum",message:"Life Is Greate"},
    {name:"Guri Sran",description:"loreemIpsum",message:"I Love React"},

  ]);

  // useEffect(() =>{
  //       db.collection("posts").onSnapshot(snapshot =>(
  //         setPosts(snapshot.docs.map(doc =>(
  //           {
  //             id: doc.id,
  //             data:doc.data(),

  //           }
  //         )))
  //       ))
  // }, [])

  //post Handler
  const sendPost = (event) => {
    event.preventDefault();

    
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a Post" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {posts.map((post) => (
        <Post  name={post.name}
        description={post.description}
        message={post.message}/>
      ))}
      <Post
        name="Guri Sran"
        description="loreemIpsum"
        message="React Is Great"
      />
    </div>
  );
};

export default Feed;

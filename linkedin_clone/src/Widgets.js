import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_articles">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

 

  return ( 
  <>
 
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "New Articles",
        "Check Out The New Articles From My NeW Course"
      )}
      {newsArticle("Corona Update", "100k new covid cases in Auckland")}
      {newsArticle(
        "React Course 101",
        "New react course 101 has been launched "
      )}
      {newsArticle(
        "Udemy Parternship",
        "Youtube Parterned with UDEMY to provide free eduaction on Youtbe Premiume Subscribers"
      )}
      {newsArticle(
        "What's Trending",
        "Sidhu Moosewala Shot Dead on 29-05-222 while going for a joy ride"
      )}


        {/* Widgets Bottom */}
        
    </div>
    </>
  );
};

export default Widgets;

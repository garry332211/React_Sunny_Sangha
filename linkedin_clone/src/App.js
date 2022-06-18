import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

import me from "./me.png";

function App() {
  return (
    <div className="app">
      <Header /> 
      {/* App Body */}
      <div className="app_body">
          
     
      <Sidebar avatar={me}/>
      <Feed/>
     <Widgets />
    
      </div>
    </div>
  );
}

export default App;

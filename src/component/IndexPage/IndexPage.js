import React from "react";
import "./indexpage.css";
//component
import SignPopUp from "./SignPopUp/SignPopUp";

const Indexpage = () => {
  return (
    <div className="startPage" style={{ fontFamily: "roboto, cursive" }}>
      <div className="bg"></div>
      <SignPopUp />
    </div>
  );
};

export default Indexpage;

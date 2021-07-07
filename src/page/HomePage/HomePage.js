import React from "react";
import { useState } from "react";
//scss
import "./homepage.css";
//component
import ArtBoard from "./../../component/ArtBoard/ArtBoard";
import SidePanel from "./../../component/SidePanel/SidePanel";
import FloatPanel from "./../../component/FloatPanel/FloatPanel";

const HomePage = () => {
  //HOOK
  const [selTime, setSelTime] = useState("selTime"); //紀錄已選取的時間塊
  return (
    <div className="entire" style={{ fontFamily: "roboto mono, cursive" }}>
      <ArtBoard selTime={selTime} setSelTime={setSelTime} />
      <SidePanel />
      <FloatPanel />
    </div>
  );
};

export default HomePage;

import React from "react"
import "./startpage.css"
//component
import SignPopUp from "./../../component/SignPopUp/SignPopUp"

const Startpage = ()=>{
    return (
        <div className="startPage" style={{fontFamily: "roboto mono, cursive"}}>
            <div className="bg"></div>
            <SignPopUp />
        </div>
    )
}

export default Startpage

import React from "react"
import {useState} from "react"

import open from "./../../../../icon/add.png"
import close from "./../../../../icon/remove.png"

const Style = ()=>{
    //HOOK
    const [SP,setSP] = useState(true) //開合視窗
    const handleSP = ()=>{
        setSP(!SP)
    }
    return (
        <>
            <div className="styleTit">
                <h4>STYLE</h4>
                <div className="collapse" onClick={handleSP} style={SP? {backgroundImage:`url(${close})`}:{backgroundImage:`url(${open})`}}></div>
            </div>
            <div className="styleFont" style={SP? {dispaly:"flex"}:{display:"none"}}>
                <div className="fontBlock">
                    <div className="font">Ag</div>
                    <div className="fontType">Default</div>
                </div>
                <div className="fontBlock">
                    <div className="font">Ag</div>
                    <div className="fontType">Mono</div>
                </div>
                <div className="fontBlock">
                    <div className="font">Ag</div>
                    <div className="fontType">Serif</div>
                </div>
            </div>
        </>
    )
}
export default Style
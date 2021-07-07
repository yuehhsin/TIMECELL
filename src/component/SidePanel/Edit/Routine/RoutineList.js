import React from "react"
import {useState} from "react"

import open from "./../../../../icon/add.png"
import close from "./../../../../icon/remove.png"

//component
import Routine from "./Routine"

const RoutineList = ()=>{
    //HOOK
    const [SP,setSP] = useState(true) //開合視窗
    const handleSP = ()=>{
        setSP(!SP)
    }
    return(
        <>
            <div className="eventTit" >
                <h4>ROUTINE</h4>
                <div className="collapse" onClick={handleSP} style={SP? {backgroundImage:`url(${close})`}:{backgroundImage:`url(${open})`}}></div>
            </div>
            <div className="routineList" style={SP? {dispaly:"flex"}:{display:"none"}}>
                <Routine />
                <Routine />
            </div>
        </>
    )
}

export default RoutineList
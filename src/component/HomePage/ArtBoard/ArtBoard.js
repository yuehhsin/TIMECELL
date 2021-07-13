import React from "react"

//css
import "./artboard.css"

//component
import OneDay from "./OneDay/OneDay"
import TimeLine from "./TimeLine"
import Nav from "./Nav"

const ArtBoard = ({selTime,SetSelTime})=>{
    return (
        <>
            <Nav />
            <div className="artboard">
                <TimeLine />
                <OneDay day="MON" selTime={selTime} SetSelTime={SetSelTime}/>
                <OneDay day="TUE" />
                <OneDay day="WED"/>
                <OneDay day="THU"/>
                <OneDay day="FRI"/>
                <OneDay day="SAT"/>
                <OneDay day="SUN"/>
            </div>
        </>
    )
}

export default ArtBoard
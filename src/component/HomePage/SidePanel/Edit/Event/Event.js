import React from "react"

const Event = ({event})=>{
    return (
        <div className="event" style={{backgroundColor:event.color}}>
            <h5>{event.content}</h5>
            <div className="edit"></div>
        </div>
    )
}

export default Event
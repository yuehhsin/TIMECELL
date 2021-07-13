import React from "react"

const EventForm = ({inputValue,setInputValue,eventText,setEventText,color,setColor})=>{
    const handeleInputValue = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const selColor = document.querySelector('input[name="color"]:checked').value
        if (inputValue!==""){
            setEventText([{content:inputValue,color:selColor,id:Math.random()},...eventText])
            setInputValue("")
        }
    }
    return (
        <form className="eventForm" onSubmit={handleSubmit}>
            <input placeholder="Create New Event" className="eventInput" style={{fontFamily: "roboto, cursive"}} onChange={handeleInputValue} value={inputValue}></input>
            <div className="selColor">
                <input id="color1" type="radio" name="color" value="#DB4453" defaultChecked={true} hidden></input>
                <label htmlFor="color1" className="color1"></label>
                <input id="color2" type="radio" name="color" value="#F2802D" hidden></input>
                <label htmlFor="color2" className="color2"></label>
                <input id="color3" type="radio" name="color" value="#36BC9B" hidden></input>
                <label htmlFor="color3" className="color3"></label>
                <input id="color4" type="radio" name="color" value="#5D9CEC" hidden></input>
                <label htmlFor="color4" className="color4"></label>
                <input id="color5" type="radio" name="color" value="#8C63E3" hidden></input>
                <label htmlFor="color5" className="color5"></label>
                <input id="color6" type="radio" name="color" value="#5C5C5C" hidden></input>
                <label htmlFor="color6" className="color6"></label>
                <input id="color7" type="radio" name="color" value="#EC87BF" hidden></input>
                <label htmlFor="color7" className="color7"></label>
                <input id="color8" type="radio" name="color" value="#F2C72D" hidden></input>
                <label htmlFor="color8" className="color8"></label>
                <input id="color9" type="radio" name="color" value="#A0D468" hidden></input>
                <label htmlFor="color9" className="color9"></label>
                <input id="color10" type="radio" name="color" value="#66D1F2" hidden></input>
                <label htmlFor="color10" className="color10"></label>
                <input id="color11" type="radio" name="color" value="#AC92ED" hidden></input>
                <label htmlFor="color11" className="color11"></label>
                <input id="color12" type="radio" name="color" value="#8B8B8B" hidden></input>
                <label htmlFor="color12" className="color12"></label>
            </div>
        </form>
    )
}

export default EventForm
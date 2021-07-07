import React from "react"
import "./signpopup.css"
import {Link} from "react-router-dom"

const SignPopUp = ()=>{
    const inputStyle = {fontFamily: "roboto mono, cursive",fontSize:"10px",letterSpacing:"2px",color:"#000000"}
    return (
        <div className="signpopup">
            <div className="signupImg"></div>
            <div className="signinBox">
                <h2>CREATE ACCOUNT</h2>
                <h5>ALREADY HAVE ACCOUNT<span>SIGN IN</span></h5>
                <form>
                    <input placeholder="ACCOUNT" style={inputStyle}></input>
                    <input placeholder="EMAIL" style={inputStyle}></input>
                    <input placeholder="PASSWORD" style={inputStyle} type="password"></input>
                    <Link to="/home">
                        <button>SIGN UP</button>
                    </Link>
                    <div className="social_sign">
                        <h5>SOCIAL LOGIN</h5>
                        <div className="google"></div>
                        <div className="github"></div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignPopUp

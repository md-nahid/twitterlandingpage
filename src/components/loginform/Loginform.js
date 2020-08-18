import React, { useState, useEffect } from 'react'
import "./Loginform.scss"
import { Link } from "react-router-dom"
import { FaTwitter } from "react-icons/fa"

const Loginform = () => {


    const [ userValue, setUservalue ] = useState("")
    const [ passValue, setPassvalue ] = useState("")

    useEffect(() => {
        let Submitbtn = document.getElementById("submit");
        if(userValue !== "" && passValue !== "") {
            Submitbtn.style.opacity = 1;
            Submitbtn.style.cursor = "pointer";
        }else {
            Submitbtn.style.opacity = 0.5;
            Submitbtn.style.cursor = "";
        }
    }, [userValue, passValue]);


// on focus style class
    const StyleClass = (e) => {
        let inputItem = document.querySelectorAll(".input-item");
        inputItem.forEach(item => {
            if(item.classList.contains("styleclassadded")) {
                item.classList.remove("styleclassadded");
            }
        });
        let parentElement = e.target.parentElement.parentElement.parentElement;
        parentElement.classList.add("styleclassadded");    
    }


    return (
        <div className="login-form">
            <div className="form-header">
                <span><FaTwitter /></span>
                <h2>Log in to Twitter</h2>
            </div>
            <form className="form-main" onSubmit={(e) => {
                e.preventDefault();
                if(userValue.toLowerCase() === "nahid" && passValue.toLowerCase() === "123456") {
                    window.location.pathname = "/thome";
                }
            }}>
                <div className="form-body">
                    <div className="input-item styleclassadded">
                        <label htmlFor="name">
                            <div className="input-field">
                                <div>Phone, email, or username</div>
                                <input 
                                type="text" 
                                id="user" 
                                autoFocus="autoFocus" 
                                onFocus={StyleClass} 
                                onChange={(e) => setUservalue(e.target.value)} 
                                value={userValue} />
                            </div>
                        </label>
                    </div>
                    <div className="input-item">
                        <label htmlFor="pass">
                            <div className="input-field">
                                <div>Password</div>
                                <input 
                                type="password" 
                                id="password" 
                                onFocus={StyleClass} 
                                onChange={(e) => setPassvalue(e.target.value)} 
                                value={passValue} />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="form-btn">
                    <input type="submit" value="Log in" id="submit" />
                </div>
                <div className="form-footer">
                    <Link to="/login">Forgot password?</Link>
                    <span>.</span>
                    <Link to="/login">Sign up for Twitter</Link>
                </div>
            </form>
        </div>
    )
}




export default Loginform

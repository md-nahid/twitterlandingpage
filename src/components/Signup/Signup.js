import React, { useState } from 'react'
import "./Signup.scss"
import { FaTwitter } from "react-icons/fa"

const Signup = () => {

    const [ Change, setChange ] = useState(false)

    // style class from input elements
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


    // name input control and warning function
    const Countletter = (e) => {
        const NameLimit = document.querySelector(".count-name-charecter");
        let Warning = document.querySelector(".warning-text");
        if(e.target.value === "") {
            Warning.style.opacity = "1";
            e.target.previousElementSibling.style.color = "rgb(224, 36, 94)";
        }else {
            Warning.style.opacity = "0";
            e.target.previousElementSibling.style.color = "rgba(29,161,242,1.00)";
        }
        NameLimit.innerHTML = e.target.value.length;
    }




    return (
        <div className="signup-container">
            <div className="signup-form">
                <div className="form-header">
                    <span><FaTwitter /></span>
                    <span><button type="button">Next</button></span>
                </div>
                <div className="form-main">
                    <div className="form-title">
                <h3>Create your account</h3>
            </div>
                    <div className="form-body">
                <div className="input-item styleclassadded">
                    <label htmlFor="name">
                        <div className="input-field">
                            <p>Name</p>
                            <input 
                            type="text" 
                            id="name" 
                            maxLength="50" 
                            onFocus={StyleClass} 
                            onChange={Countletter} 
                            autoFocus="autoFocus" />
                        </div>
                    </label>
                </div>
                <div className="charecter-limit-and-warning">
                    <p className="warning-text">What's your name?</p>
                    <p>
                        <span className="count-name-charecter"> 0 </span> / <span>50</span>
                    </p>
                </div>
                <div className="input-item">
                    <label htmlFor="phone">
                        <div className="input-field">
                            <p>{Change ? "Email" : "Phone"}</p>
                            {Change ? <input 
                                type="email" 
                                id="phone" 
                                onFocus={StyleClass} /> : 
                                <input 
                                type="text" 
                                id="email" 
                                onFocus={StyleClass} /> }
                        </div>
                    </label>
                </div>
            </div>
                    <div className="useemail-instead">
                    <p onClick={() => setChange(!Change)}>{Change ? "Use phone insted" : "Use email insted"}</p>
            </div>
                    <div className="date-of-birth">
                        <h3>Date of birth</h3>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a bussiness, a pet, or something else.</p>
                    </div>
                    <div className="select-date-of-birth">
                        <div className="select-item select-month">
                            <p>Month</p>
                            <select>
                                <option defaultValue></option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                        <div className="select-item select-day">
                            <p>Day</p>
                            <select>
                                <option defaultValue></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>
                        <div className="select-item select-year">
                            <p>Year</p>
                            <select>
                                <option defaultValue></option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

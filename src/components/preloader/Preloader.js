import React from 'react'
import { FaTwitter } from "react-icons/fa"
import "./Preloader.scss"





const Preloader = () => {

    // useEffect(() => {
    //     let Preloader = document.querySelector(".preloader");
    //     setTimeout(() => {
    //         Preloader.style.display = "none";
    //     }, 2000);
    // })


    document.addEventListener("DOMContentLoaded", () => {
        let Preloader = document.querySelector(".preloader");
        Preloader.style.display = "none";
    })


    return (
        <div className="preloader">
            <div>
                <span> <FaTwitter /> </span>
            </div>
        </div>
    )
}


export default Preloader
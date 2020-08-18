import React from 'react'
import Button from "../button/Button"
import WhiteButton from "../whitebutton/Whitebutton"
import "./BannerTwo.scss"



// importing images
// import TwitterBird from "../../images/twitter-icon.png"
import { FaTwitter } from "react-icons/fa"




const Bannertwo = () => {
    return (
        <div className="banner-two">
            <div>
                <div className="twitter-bird"><span><FaTwitter/></span></div>
                <div className="banner-two-title">
                    <h2>See what’s happening in the world right now</h2>
                </div>
                <h4>Join Twitter today.</h4>
                <Button />
                <WhiteButton />
            </div>
        </div>
    )
}

export default Bannertwo

import React from 'react'
import { FiSearch, FiUsers } from "react-icons/fi"
import { RiChat1Line } from "react-icons/ri"

import "./Banner.scss"


const Banner = () => {
    return (
        <div className="banner">
            <div>
                <div>
                    <span className="banner-icon"><FiSearch /></span> Follow your interests.
                </div>
                <div>
                    <span className="banner-icon"><FiUsers /></span> Hear what people are talking about.
                </div>
                <div>
                    <span className="banner-icon"><RiChat1Line /></span> Join the conversation.
                </div>
            </div>
        </div>
    )
}

export default Banner

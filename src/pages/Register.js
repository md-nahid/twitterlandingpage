import React from 'react'
import Banner from "../components/banner/Banner"
import BannerTwo from "../components/banner2/Bannertwo"
import Navbar from "../components/navbar/Navbar"
import Smallscreenbutton from "../containers/smallscreenbutton/Smallscreenbutton"
import Signup from "../components/Signup/Signup"

const Register = () => {
    return (
        <div>
            <div>
                <div className="banner-main">
                    <BannerTwo />
                    <Banner /> 
                </div>
                <Smallscreenbutton />
                <Navbar />
            </div>
            <Signup />
        </div>
    )
}

export default Register

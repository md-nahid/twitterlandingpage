import React from 'react'
import { Helmet } from "react-helmet"
import Banner from "../components/banner/Banner"
import BannerTwo from "../components/banner2/Bannertwo"
import Navbar from "../components/navbar/Navbar"
import Smallscreenbutton from "../containers/smallscreenbutton/Smallscreenbutton"

const Index = () => {
    return (
        <div>
            <Helmet>
                <title>Twitter. it's what's happening / Twitter</title>
            </Helmet>
            <div className="banner-main">
                <BannerTwo />
                <Banner /> 
            </div>
            <Smallscreenbutton />
            <Navbar />
        </div>
    )
}

export default Index

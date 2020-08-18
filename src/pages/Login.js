import React from 'react'
import { Helmet } from "react-helmet"
import Loginform from '../components/loginform/Loginform'

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login on Twitter / Twitter</title>
            </Helmet>
            <Loginform />
        </div>
    )
}




export default Login

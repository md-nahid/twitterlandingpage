import React from 'react'
import { Link } from "react-router-dom"
import "./Button.scss"

const Button = () => {
    return (
        <div className="blue-button">
            <Link to="/register">Sign up</Link>
        </div>
    )
}

export default Button

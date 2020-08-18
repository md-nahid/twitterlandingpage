import React from 'react'
import { Link } from "react-router-dom"
import "./Whitebutton.scss"

const Whitebutton = () => {
    return (
        <div className="white-button">
            <Link to="/login"> Log in </Link>
        </div>
    )
}

export default Whitebutton

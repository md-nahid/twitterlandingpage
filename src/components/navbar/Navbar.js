import React from 'react'
import { Menu } from "./Navbar.data"
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    {Menu.map( (item) => (
                        <li key={item.id}>
                            <a href={item.pathname} rel="noopener noreferrer" target="_blank">{item.name}</a>
                        </li>
                    ))}
                    <li>© 2020 Twitter, Inc.</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

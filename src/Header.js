import React from "react"
import reactLogo from "./images/react-logo.png"

export default function Header(){
    return(
    <header>
            <nav className="navbar">
                <img src={reactLogo} alt="react logo" className="logo"/>
                <ul className="nav-items">
                    <li className="sub-nav-item">Pricing</li>
                    <li className="sub-nav-item">About</li>
                    <li className="sub-nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
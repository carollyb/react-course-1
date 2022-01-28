import React from "react";
import reactLogo from "../images/react-icon.png"

export default function Header(){
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo">
                    <img src={reactLogo} alt="react logo" className="img-logo" />
                    <h3 className="logo">ReactFacts</h3>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
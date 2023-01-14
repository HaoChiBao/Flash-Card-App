import React from "react";
import './landing.css'
import { Link } from "react-router-dom";


function Landing() {
    return (
        <body>
            <div className="container">
                <div className="text-section">
                    <div className="title1"> Name</div>
                    <div className="description"> Transform your study sessions into a game by playing interactive flash cards
                        mini-games!</div>
                    <Link to="/register">
                        <div>
                            <button className="sign-up">Sign Up</button>
                        </div>
                    </Link>

                    <Link to="login">
                        <div>
                            <button className="login" >Login</button>
                        </div>
                    </Link>
                </div>
                <div>
                    <img src="mainslayer.png" />
                </div>
            </div>
        </body>
    );


}

export default Landing;
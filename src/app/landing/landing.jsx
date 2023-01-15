import React from "react";
import './landing.css'
import { Link } from "react-router-dom";


function Landing() {
    window.onload = function () {
        const signUp = document.querySelector('.homesign-up');
        const login = document.querySelector('.login1');

        signUp.addEventListener('click', () => {
            window.location.assign('/register');
        })

        login.addEventListener('click', () => {
            window.location.assign('/login');
        })
    }

    return (
        <div className="bodyFr">
            <div>
                <div className="login-box">
                    <a className="login1">Login</a>
                </div>
                <div className="container">
                    <div className="texty">
                        <div className="title1">Elevate your learning with <span className="special1">active recall</span> and <span className="special1">mini-games</span></div>
                        <div className="doomed">Because falling asleep on your desk is so last semester.</div>
                        <div>
                            <button className="homesign-up" >Get Started</button>
                        </div>

                    </div>

                    <img src="./sign-up/cc.png"></img>

                    {/* <div></div>
                <div>
                    <button className="login" >Login</button>
                </div>
                <div className="text-section">
                    <div className="title1">Study Sprint</div>
                    <div className="description"> Elevate your learning with active recall and mini-games</div>

                    
                    <div>
                        <img src="mainslayer.png" />
                    </div>
                </div> */}
                </div >
            </div>
        </div>
    );


}

export default Landing;
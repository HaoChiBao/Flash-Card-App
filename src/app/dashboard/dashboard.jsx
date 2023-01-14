import './dashboard.css'

function Dashboard() {
    return (
        <div className="wrapper">
            <div className="left">
                <div className="welcome-banner">
                    <div className="text">
                        <div className="big1" id='welcome-title'>Welcome Back, cum</div>
                        <div className="big2">Let's get started <a href="">→</a>
                        </div>

                    </div>
                </div>
                <div className="flashcards">
                    <div className='jump'>Jump Back Into</div>
                    <div></div>
                </div>
            </div>
            <div className="right">
                <div className="activity">
                    <div>Activity.</div>
                    <div className="minutes">
                        <div>Minutes Achieved</div>
                        <div>120 mins</div>
                    </div>
                    <div className="c-learned"></div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard
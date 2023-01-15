import './dashboard.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Header from '../common/nav';
import ProgressBar from '../common/projectbar';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import {System} from '../../firebase/config';

function Dashboard() {
    let system = new System();
    window.addEventListener('load', () => {
        let uid = localStorage.getItem('flash-card-uid')
        document.querySelector('.big2').addEventListener('click', () => { window.location.assign('/create') })
        const ref = doc(system.db, 'users', uid)
        const field = getDoc(ref).then((doc) => {
            const data = doc.data()
            const username = data.username
            console.log(username)
            document.querySelector('#welcome-title').innerHTML = `Welcome Back, ${username}`
        })
    })
    const testData = [
        { bgcolor: "#5B8F8D", completed: 60 },
    ];
    return (
        <div>
            <Header />

            <div className="wrapper">

                <div className="left">
                    <div className="welcome-banner">
                        <div className="text">
                            <div className="big1" id='welcome-title'>Welcome Back, </div>
                            <div className="big2">Let's get started →</div>

                        </div>
                    </div>
                    <div className="flashcards">
                        <div className='jump'>Jump Back Into</div>
                        {/* need a carasoul here!!!! */}
                        <div></div>
                    </div>
                </div>
                <div className="right">
                    <div className="activity">
                        <div className='big1'>Activity.</div>
                        <div className='cc'>
                            <div className="minutes">
                                <div className='achievement'>Minutes Achieved</div>
                                <div className='womp'>120 mins</div>
                                <div className="slay">
                                    {testData.map((item, idx) => (
                                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                    ))}
                                </div>
                            </div>
                            {/* amount of time spent studying */}
                        </div>
                        <div style={{ display: 'flex', justifyContent: "center", }}>
                            <div style={{ width: 250, height: 250, background: '#D9D9D9', borderRadius: '40px', padding: '33px', }}>

                                <CircularProgressbarWithChildren className='circly' styles={buildStyles({ trailColor: "#c1c1c1", pathColor: '#5B8F8E' })} value={66}>
                                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                    <div style={{ fontSize: 26 }}>
                                        <strong>{66}%</strong> covered
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>

                        {/* how much cards went through... need to be dynamically applied */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
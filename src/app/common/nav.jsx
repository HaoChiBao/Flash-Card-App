import { Link } from "react-router-dom";
import './nav.css'

function Header() {
    window.addEventListener('load', () => {
        const home = document.getElementById('home')
        const flashcards = document.getElementById('flashcards')
        const games = document.getElementById('games')

        home.addEventListener('click', () => { window.location.assign('/dashboard') })
        flashcards.addEventListener('click', () => { window.location.assign('/groups') })
        games.addEventListener('click', () => { window.location.assign('/games') })
    })
    return (
        <header>
            <nav className='nav'>
                <div className="icon-container">
                    {/* <img alt="favicon" src="favicon.png" style={{ width: '70px' }}></img> */}
                </div>
                <div className='nav-right'>

                    <ul className='nav-items'>
                        <li id='home'>
                            {/* <Link to="/Dashboard" style={{ textDecoration: 'none' }}>Home</Link> */}
                            Home
                        </li>

                        <li id='flashcards'>
                            {/* <Link to="/" style={{ textDecoration: 'none' }}> Flashcards</Link> */}
                            Flashcards
                        </li>

                        <li id='games'>
                            Games
                        </li>

                    </ul>
                </div>
            </nav >
        </header >

    )
}

export default Header;
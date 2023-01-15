import { Link } from "react-router-dom";
import './nav.css'

function Header() {
    return (
        <header>
            <nav className='nav'>
                <div className="icon-container">
                    {/* <img alt="favicon" src="favicon.png" style={{ width: '70px' }}></img> */}
                </div>
                <div className='nav-right'>

                    <ul className='nav-items'>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>

                        <li>
                            <Link to="/" style={{ textDecoration: 'none' }}> Flashcards</Link>
                        </li>

                    </ul>
                </div>
            </nav >
        </header >

    )
}

export default Header;
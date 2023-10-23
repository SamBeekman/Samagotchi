import { Link, useLocation } from 'react-router-dom';


function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Homepage
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/chat"
                    className={currentPage === '/chat' ? 'nav-link active' : 'nav-link'}
                >
                    Chat
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/friends"
                    className={currentPage === '/friends' ? 'nav-link active' : 'nav-link'}
                >
                    Friends
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/login-signup"
                    className={currentPage === '/login-signup' ? 'nav-link active' : 'nav-link'}
                >
                    Login-Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/payment"
                    className={currentPage === '/payment' ? 'nav-link active' : 'nav-link'}
                >
                    Payment
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/play"
                    className={currentPage === '/play' ? 'nav-link active' : 'nav-link'}
                >
                    Play
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/profile/:username"
                    className={currentPage === '/profile/username' ? 'nav-link active' : 'nav-link'}
                >
                    Profile
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
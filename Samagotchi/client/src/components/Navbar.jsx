import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';

function NavTabs() {
    const currentPage = useLocation().pathname;

    let navLinks;
    if (Auth.loggedIn()) {
        navLinks = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
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
                        to="/chat"
                        className={currentPage === '/chat' ? 'nav-link active' : 'nav-link'}
                    >
                        Chat
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
                        to="/logout"
                        className={currentPage === '/logout' ? 'nav-link active' : 'nav-link'}
                    >
                        Logout
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/payment"
                        className={currentPage === '/payment' ? 'nav-link active' : 'nav-link'}
                    >
                        Donate
                    </Link>
                </li>
            </ul>
        );
    } else {
        navLinks = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to="/login"
                        className={currentPage === '/login-signup' ? 'nav-link active' : 'nav-link'}
                    >
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/payment"
                        className={currentPage === '/payment' ? 'nav-link active' : 'nav-link'}
                    >
                        Donate
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <Container>
            <div className="d-flex justify-content-center">
                {navLinks}
            </div>
        </Container>
    );
}

export default NavTabs;






// import { Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import loggedIn from '../utils/auth'


// function NavTabs() {
//     const currentPage = useLocation().pathname;

//     return (

//         {
//             loggedIn?
//                 <Container>
//             < div className = "d-flex justify-content-center" >
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <Link
//                     to="/"
//                     className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Home
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/profile/:username"
//                     className={currentPage === '/profile/username' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Profile
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/friends"
//                     className={currentPage === '/friends' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Friends
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/chat"
//                     className={currentPage === '/chat' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Chat
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/play"
//                     className={currentPage === '/play' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Play
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/login"
//                     className={currentPage === '/login-signup' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Login
//                 </Link>
//             </li>
//             {/* <li className="nav-item">
//                 <Link
//                     to="/signup"
//                     className={currentPage === '/profile/username' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Signup
//                 </Link>
//             </li> */}
//             <li className="nav-item">
//                 <Link
//                     to="/payment"
//                     className={currentPage === '/payment' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Donate
//                 </Link>
//             </li>
//         </ul>
//             </div >
//         </Container >
//         : <Container>
//         <div className="d-flex justify-content-center">
//             <ul className="nav nav-tabs">
//                 <li className="nav-item">
//                     <Link
//                         to="/"
//                         className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//                     >
//                         Home
//                     </Link>
//                 </li>

//                 <li className="nav-item">
//                     <Link
//                         to="/login"
//                         className={currentPage === '/login-signup' ? 'nav-link active' : 'nav-link'}
//                     >
//                         Login
//                     </Link>
//                 </li>
//                 {/* <li className="nav-item">
//             <Link
//                 to="/signup"
//                 className={currentPage === '/profile/username' ? 'nav-link active' : 'nav-link'}
//             >
//                 Signup
//             </Link>
//         </li> */}
//                 <li className="nav-item">
//                     <Link
//                         to="/payment"
//                         className={currentPage === '/payment' ? 'nav-link active' : 'nav-link'}
//                     >
//                         Donate
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     </Container>
// }
//     );
// }

// export default NavTabs;
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className='Header'>
                <img className='header-logo' src="assets/logo.png" alt="App Logo" />
                <h1>PHGRM.</h1>
            </div>
        </Link>
    )
}

export default Header;
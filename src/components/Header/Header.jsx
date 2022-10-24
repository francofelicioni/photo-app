import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className='Header'>
                <img className='header-logo' src="https://firebasestorage.googleapis.com/v0/b/phgrm-oxygen.appspot.com/o/logo.png?alt=media&token=3e945ef2-e3d3-4a26-b379-103994762ff5" alt="App Logo" />
                <h1>PHGRM.</h1>
            </div>
        </Link>
    )
}

export default Header;
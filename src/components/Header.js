import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className="header">
            <Link to="/">Home</Link>
            <Link to="Contact">Contact</Link>
            <Link to="Project">Project</Link>
        </header>
    );
}

export default Header;
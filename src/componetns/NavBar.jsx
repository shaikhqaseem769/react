import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/favorites" className="navbar-link">Favorite</Link>
            </div>
        </nav>
    )
}

export default NavBar
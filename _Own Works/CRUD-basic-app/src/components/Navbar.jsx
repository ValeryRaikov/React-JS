import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
                <div className="container">
                    <NavLink 
                        className="navbar-brand" 
                        to="/"
                        style={({ isActive}) => isActive 
                            ? {textDecoration: 'underline'} : {}}
                    >
                        <img src="/icon.png" width="30" className="me-2" />
                        Web App
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink 
                            className="nav-link text-dark" 
                            aria-current="page" 
                            to="/"
                            style={({ isActive}) => isActive 
                                ? {textDecoration: 'underline'} : {}}
                        >
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink 
                            className="nav-link text-dark" 
                            to="/contact"
                            style={({ isActive}) => isActive 
                                ? {textDecoration: 'underline'} : {}}
                        >
                            Contact
                        </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/admin/products">Products</Link></li>
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    );
}
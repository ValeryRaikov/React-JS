export default function Header() {
    return (
        <div className="header_section">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo">
                    <a href="index.html">
                    <img src="images/logo.png" />
                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                        HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">
                        ABOUT
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="template.html">
                        OUR TEMPLATE
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="proveding.html">
                        PROVEDING
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                        CONTACT US
                        </a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <div className="search_icon">
                        <a href="#">
                        <img src="images/call-icon.png" />
                        <span className="padding_left0">CALL US : +01 9876543210</span>
                        </a>
                    </div>
                    <div className="search_icon">
                        <a href="#">
                        <img src="images/mail-icon.png" />
                        <span className="padding_left0">CALL US : +01 9876543210</span>
                        </a>
                    </div>
                    <div className="search_icon">
                        <a href="#">
                        <img src="images/search-icon.png" />
                        </a>
                    </div>
                    </form>
                </div>
                </nav>
            </div>
    );
}
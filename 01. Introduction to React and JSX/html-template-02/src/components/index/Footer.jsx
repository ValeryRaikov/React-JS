export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="footer_logo">
                    <a href="index.html">
                        <img src="images/logo.png" />
                    </a>
                    </div>
                    <h4 className="contact_text">Contact Us</h4>
                    <div className="call_section">
                    <div className="call_section_left">
                        <div className="map_icon">
                        <img src="images/map-icon.png" />
                        </div>
                        <p className="location_text">London 145</p>
                        <p className="location_text">United Kingdom</p>
                    </div>
                    <div className="call_section_middle">
                        <div className="map_icon">
                        <img src="images/mail-icon1.png" />
                        </div>
                        <p className="location_text">demo@gmail.com</p>
                        <p className="location_text">demo@gmail.com</p>
                    </div>
                    <div className="call_section_right">
                        <div className="map_icon">
                        <img src="images/call-icon1.png" />
                        </div>
                        <p className="location_text">+01 1234567890</p>
                        <p className="location_text">+01 9876543210</p>
                    </div>
                    </div>
                    <div className="social_icon">
                    <ul>
                        <li>
                        <a href="#">
                            <img src="images/fb-icon.png" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="images/twitter-icon.png" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="images/linkedin-icon.png" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="images/instagram-icon.png" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="menus_main">
                    <div className="menus_left">
                        <h3 className="menus_text">Menus</h3>
                        <div className="menu_text">
                        <ul>
                            <li>
                            <a href="index.html">Home</a>
                            </li>
                            <li>
                            <a href="about.html">About Us</a>
                            </li>
                            <li>
                            <a href="services.html">Services</a>
                            </li>
                            <li>
                            <a href="pages.html">Pages</a>
                            </li>
                            <li>
                            <a href="blog.html">Blog</a>
                            </li>
                            <li>
                            <a href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="menus_middle">
                        <h3 className="Recent_text">Recent Post</h3>
                        <p className="staff_text">
                        Participate in staff meetings manage dedicated to marketing
                        November 25, 2019
                        </p>
                    </div>
                    <div className="menus_right">
                        <h1 className="Recent_text">Newsletter</h1>
                        <input
                        type="text"
                        className="Enter_text"
                        placeholder="Enter your Emil"
                        name="Enter your Emil"
                        />
                        <div className="subscribe_bt">
                        <a href="#">Subscribe</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
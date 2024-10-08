export default function About() {
    return (
        <>
            {/* basic */}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* mobile metas */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            {/* site metas */}
            <title>About</title>
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            {/* bootstrap css */}
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
            {/* style css */}
            <link rel="stylesheet" type="text/css" href="css/style.css" />
            {/* Responsive*/}
            <link rel="stylesheet" href="css/responsive.css" />
            {/* fevicon */}
            <link rel="icon" href="images/fevicon.png" type="image/gif" />
            {/* Scrollbar Custom CSS */}
            <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
            {/* Tweaks for older IEs*/}
            <link
                rel="stylesheet"
                href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
            />
            {/* owl stylesheets */}
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
                media="screen"
            />
            {/* header section start */}
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
            {/* header section end */}
            {/* templet bg section start */}
            <div className="templet_bg">
                {/* email section start */}
                <div className="email_section layout_padding">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="image_2">
                        <img src="images/img-2.png" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="mark_text">Mark email carefully for you</h1>
                        <p className="lorem_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore{" "}
                        </p>
                        <div className="contact_bt">
                        <a href="#">Read More</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* email section end */}
                {/* footer section start */}
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
                {/* footer section end */}
            </div>
            {/* templet bg section end */}
            {/* copyright section start */}
            <div className="copyright_section">
                <div className="container">
                <div className="copyright_text">
                    2019 All Rights Reserved. Design by{" "}
                    <a href="https://html.design">Free html Templates</a>
                    <span className="teams_text">Terms of Service Privacy</span>
                </div>
                </div>
            </div>
            {/* copyright section end */}
            {/* Javascript files*/}
            {/* sidebar */}
            {/* javascript */}
        </>
    );
}
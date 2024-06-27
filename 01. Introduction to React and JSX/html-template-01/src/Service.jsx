export default function Service() {
    return (
        <>
            {/* Basic */}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            {/* Mobile Metas */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            {/* Site Metas */}
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link rel="shortcut icon" href="images/favicon.png" type="" />
            <title> Finexo </title>
            {/* bootstrap core css */}
            <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
            {/* fonts style */}
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
                rel="stylesheet"
            />
            {/*owl slider stylesheet */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
            />
            {/* font awesome style */}
            <link href="css/font-awesome.min.css" rel="stylesheet" />
            {/* Custom styles for this template */}
            <link href="css/style.css" rel="stylesheet" />
            {/* responsive style */}
            <link href="css/responsive.css" rel="stylesheet" />
            <div className="hero_area">
                <div className="hero_bg_box">
                <div className="bg_img_box">
                    <img src="images/hero-bg.png" alt="" />
                </div>
                </div>
                {/* header section strats */}
                <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                        <span>Finexo</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                        <li className="nav-item ">
                            <a className="nav-link" href="index.html">
                            Home{" "}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">
                            {" "}
                            About
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="service.html">
                            Services <span className="sr-only">(current)</span>{" "}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="why.html">
                            Why Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="team.html">
                            Team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            {" "}
                            <i className="fa fa-user" aria-hidden="true" /> Login
                            </a>
                        </li>
                        <form className="form-inline">
                            <button
                            className="btn  my-2 my-sm-0 nav_search-btn"
                            type="submit"
                            >
                            <i className="fa fa-search" aria-hidden="true" />
                            </button>
                        </form>
                        </ul>
                    </div>
                    </nav>
                </div>
                </header>
                {/* end header section */}
            </div>
            {/* service section */}
            <section className="service_section layout_padding">
                <div className="service_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                    <h2>
                        Our <span>Services</span>
                    </h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration
                    </p>
                    </div>
                    <div className="row">
                    <div className="col-md-4 ">
                        <div className="box ">
                        <div className="img-box">
                            <img src="images/s1.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>Currency Wallet</h5>
                            <p>
                            fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using
                            </p>
                            <a href="">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="box ">
                        <div className="img-box">
                            <img src="images/s2.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>Security Storage</h5>
                            <p>
                            fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using
                            </p>
                            <a href="">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="box ">
                        <div className="img-box">
                            <img src="images/s3.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>Expert Support</h5>
                            <p>
                            fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using
                            </p>
                            <a href="">Read More</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="btn-box">
                    <a href="">View All</a>
                    </div>
                </div>
                </div>
            </section>
            {/* end service section */}
            {/* info section */}
            <section className="info_section layout_padding2">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 info_col">
                    <div className="info_contact">
                        <h4>Address</h4>
                        <div className="contact_link_box">
                        <a href="">
                            <i className="fa fa-map-marker" aria-hidden="true" />
                            <span>Location</span>
                        </a>
                        <a href="">
                            <i className="fa fa-phone" aria-hidden="true" />
                            <span>Call +01 1234567890</span>
                        </a>
                        <a href="">
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <span>demo@gmail.com</span>
                        </a>
                        </div>
                    </div>
                    <div className="info_social">
                        <a href="">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href="">
                        <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href="">
                        <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info_col">
                    <div className="info_detail">
                        <h4>Info</h4>
                        <p>
                        necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a
                        handful
                        </p>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mx-auto info_col">
                    <div className="info_link_box">
                        <h4>Links</h4>
                        <div className="info_links">
                        <a className="active" href="index.html">
                            Home
                        </a>
                        <a className="" href="about.html">
                            About
                        </a>
                        <a className="" href="service.html">
                            Services
                        </a>
                        <a className="" href="why.html">
                            Why Us
                        </a>
                        <a className="" href="team.html">
                            Team
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info_col ">
                    <h4>Subscribe</h4>
                    <form action="#">
                        <input type="text" placeholder="Enter email" />
                        <button type="submit">Subscribe</button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            {/* end info section */}
            {/* footer section */}
            <section className="footer_section">
                <div className="container">
                <p>
                    © <span id="displayYear" /> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
                </div>
            </section>
            {/* footer section */}
            {/* jQery */}
            {/* popper js */}
            {/* bootstrap js */}
            {/* owl slider */}
            {/* custom js */}
            {/* Google Map */}
            {/* End Google Map */}
        </>
    );
}
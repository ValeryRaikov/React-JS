export default function About() {
    return (
        <>
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
                        <li className="nav-item active">
                            <a className="nav-link" href="about.html">
                            {" "}
                            About <span className="sr-only">(current)</span>{" "}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="service.html">
                            Services
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
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container  ">
                <div className="heading_container heading_center">
                    <h2>
                    About <span>Us</span>
                    </h2>
                    <p>
                    Magni quod blanditiis non minus sed aut voluptatum illum quisquam
                    aspernatur ullam vel beatae rerum ipsum voluptatibus
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                    <div className="img-box">
                        <img src="images/about-img.png" alt="" />
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="detail-box">
                        <h3>We Are Finexo</h3>
                        <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look even
                        slightly believable. If you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All
                        </p>
                        <p>
                        Molestiae odio earum non qui cumque provident voluptates,
                        repellendus exercitationem, possimus at iste corrupti officiis
                        unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
                        omnis quasi expedita.
                        </p>
                        <a href="">Read More</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* end about section */}
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
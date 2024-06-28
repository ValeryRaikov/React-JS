export default function Banner() {
    return (
        <div className="banner_section layout_padding">
                <div className="container">
                <div id="my_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                        <div className="col-md-6">
                            <h1 className="banner_taital">
                            Email mark provides <br /> you a wonderful viewing experience{" "}
                            </h1>
                            <div className="contact_bt">
                            <a href="contact.html">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_1">
                            <img src="images/img-1.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                        <div className="col-md-6">
                            <h1 className="banner_taital">
                            Email mark provides <br /> you a wonderful viewing experience{" "}
                            </h1>
                            <div className="contact_bt">
                            <a href="contact.html">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_1">
                            <img src="images/img-1.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                        <div className="col-md-6">
                            <h1 className="banner_taital">
                            Email mark provides <br /> you a wonderful viewing experience{" "}
                            </h1>
                            <div className="contact_bt">
                            <a href="contact.html">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_1">
                            <img src="images/img-1.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#my_slider"
                        role="button"
                        data-slide="prev"
                    >
                        <i className="fa fa-left">
                        <img src="images/left-icon.png" />
                        </i>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#my_slider"
                        role="button"
                        data-slide="next"
                    >
                        <i className="fa fa-right">
                        <img src="images/right-icon.png" />
                        </i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
    );
}
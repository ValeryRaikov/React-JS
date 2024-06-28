export default function Contact() {
    return (
        <div className="contact_section layout_padding">
            <div className="container">
                <h1 className="solution_text">Contact Us</h1>
                <div className="mail_section">
                <input type="" className="mail_text" placeholder="Name" name="Name" />
                <input
                    type=""
                    className="mail_text"
                    placeholder="Phone Number"
                    name="Phone Number"
                />
                <input
                    type=""
                    className="mail_text"
                    placeholder="Email"
                    name="Email"
                />
                <textarea
                    className="massage_text"
                    placeholder="Message"
                    rows={5}
                    id="comment"
                    name="Message"
                    defaultValue={""}
                />
                <div className="send_bt">
                    <a href="#">send</a>
                </div>
                </div>
            </div>
        </div>
    );
}
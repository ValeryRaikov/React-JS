import Contact from "./Contact";
import Design from "./Design";
import Email from "./Email";
import Footer from "./Footer";
import Solution from "./Solution";
import Template from "./Template";

export default function Templet() {
    return (
        <div className="templet_bg">
            <Email />
            <Solution />
            <Template />
            <Design />
            <Contact />
            <Footer />
        </div>
    );
}
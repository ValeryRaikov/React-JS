import Banner from "./components/index/Banner";
import Copyright from "./components/index/Copyright";
import Header from "./components/index/Header";
import Links from "./components/index/Links";
import Metas from "./components/index/Metas";
import Templet from "./components/index/Templet";

export default function Index() {
    return (
        <>
            <Metas />
            <Links />
            <Header />
            <Banner />
            <Templet />
            <Copyright />
        </>
    );
}
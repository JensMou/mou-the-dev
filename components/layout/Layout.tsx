import Footer from "./Footer";
import Meta from "./Meta";
import Navigation from "./Navigation";
import CookieAlert from "../CookieAlert";
type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <Navigation />
                <main>{children}</main>
                <CookieAlert />
            </div>
            <Footer />
        </>
    );
};

export default Layout;

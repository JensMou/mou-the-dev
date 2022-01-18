import Footer from "./Footer";
import Meta from "./Meta";
import Navigation from "./Navigation";
import CookieAlert from "../CookieAlert";
type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
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

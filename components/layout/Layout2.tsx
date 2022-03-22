import Footer from "./Footer2";
import Meta from "./Meta2";
import Navigation from "./Navigation2";
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

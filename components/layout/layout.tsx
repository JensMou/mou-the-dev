import Footer from "./Footer";
import Meta from "./Meta";
import Navigation from "./Navigation";
import Alert from "../Alert";
type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Navigation />
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Alert />
      <Footer />
    </>
  );
};

export default Layout;

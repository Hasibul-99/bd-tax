import AuthNavbar from "@/components/shared/AuthNavbar";
import Footer from "@/components/shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <AuthNavbar />
        {children}

      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
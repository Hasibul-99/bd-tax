import AuthNavbar from "@/components/shared/AuthNavbar";
import Footer from "@/components/shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div >
        <AuthNavbar />
        <div className="bg-slate-100 container mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
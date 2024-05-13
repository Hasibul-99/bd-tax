import AuthNavbar from "@/components/shared/AuthNavbar";
import Footer from "@/components/shared/Footer";

const RootLayout = (props) => {
  const { children, params: { locale } } = props;

  return (
    <>
      <div >
        <AuthNavbar locale={locale} />
        <div className="bg-slate-100 container mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
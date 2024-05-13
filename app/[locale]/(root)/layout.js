import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const RootLayout = (props) => {
    const { children, params: { locale } } = props;

    return (
        <>
            <div className="bg-[#F8FAFC]">
                <Navbar locale={locale} />
                <div className="bg-slate-100 container mx-auto">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;
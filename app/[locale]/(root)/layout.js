import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const RootLayout = ({ children }) => {
    return (
        <>
            <div className="bg-[#F8FAFC]">
                <Navbar />
                <div className="bg-slate-100 container mx-auto">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;
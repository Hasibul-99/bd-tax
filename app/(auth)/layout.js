import AuthNavbar from "@/components/shared/AuthNavbar";

const RootLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
        <AuthNavbar/>
      {children}
    </div>
  );
};

export default RootLayout;
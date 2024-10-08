import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LandingPage = ({ children }: { children: React.ReactNode }) => {
    return (
      <main>
        <Navbar/>
        {children}
        <Footer/>
      </main>
    );
  };
  
  export default LandingPage;
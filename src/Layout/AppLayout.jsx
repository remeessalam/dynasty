import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../Components/ScrollToTop";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  console.log("update");
  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      <div className="md:pt-[7rem]">
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;

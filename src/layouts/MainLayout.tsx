import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between bg-primary text-white">
      {/* header */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      {/* main content */}
      <main className="flex-1 h-full">
        <Outlet />
      </main>
      {/* footer */}
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

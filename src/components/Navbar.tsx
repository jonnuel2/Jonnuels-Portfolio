import React from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className=" bg-primary w-full h-auto py-4 text-text-grey ">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <a href="#hero" className="w-[20%] md:w-[10%]">
          <img src={Logo} alt="" />
        </a>

        {/* Desktop nav-menu */}
        <ul className="hidden lg:flex gap-8 text-text-grey  text-sm">
          <li className="hover:text-white">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-white">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-white">
            <a href="#live-projects">Live Projects</a>
          </li>
        </ul>

        {/* Mobile menu */}
        <button onClick={toggleModal} className="lg:hidden">
          <Icon icon="mdi:hamburger-open" width="24" height="24" />
        </button>

        {/* modal */}
        {isModalOpen && (
          <div className="lg:hidden">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="bg-primary2 absolute top-0 right-0 w-[50%] h-[100vh] flex flex-col gap-16 items-left py-24 px-2">
              <button onClick={toggleModal} className="absolute top-4 right-4">
                <Icon icon="mdi:close" width="24" height="24" />
              </button>

              <ul className="flex flex-col gap-4 text-white text-lg">
                <li className="flex items-center justify-between px-4">
                  <a
                    href="#about"
                    className="flex items-center justify-between w-full"
                  >
                    About Me
                    <Icon
                      icon="mdi-light:chevron-right"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <div className="w-full h-[1px] bg-border"></div>

                <li className="flex items-center justify-between px-4">
                  <a
                    href="#skills"
                    className="flex items-center justify-between w-full"
                  >
                    Skills
                    <Icon
                      icon="mdi-light:chevron-right"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
                <div className="w-full h-[1px] bg-border"></div>

                <li className="flex items-center justify-between px-4">
                  <a
                    href="#live-projects"
                    className="flex items-center justify-between w-full"
                  >
                    Live Projects
                    <Icon
                      icon="mdi-light:chevron-right"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
              </ul>

              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:nonsokach@gmail.com?subject=Hiring%20inquiry&body=I%20would%20like%20to%20hire%20you%20for%20a%20project.")
                }
                className="flex items-center gap-2 pl-8 pr-6 py-2 border rounded-[24px] text-white border-border hover:bg-primary text-sm transition-all duration-300 ease-in-out hover:scale-[90%]"
              >
                Hire me{" "}
                <Icon
                  icon="stash:chevron-double-left-light"
                  width="24"
                  height="24"
                  style={{ transform: "rotate(180deg)" }}
                />
              </button>
            </div>
          </div>
        )}

        {/* end of mobile menu */}

        <div className="hidden lg:flex">
          <Button
            onClick={() =>
              (window.location.href =
                "mailto:nonsokach@gmail.com?subject=Hiring%20inquiry&body=I%20would%20like%20to%20hire%20you%20for%20a%20project.")
            }
            label="Hire me"
            icon="stash:chevron-double-left-light"
            iconRotation="180deg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Logo from "../assets/logo.png";

const Footer = () => {
  return <div className="bg-primary h-20 flex items-center border-t-[1px] border-border">
    <div className="container flex items-center justify-between w-full">
        <div>
            <span className="text-text-grey text-xs">© 2024 Jonnuel. All rights reserved. </span>
        </div>
        <a href="#hero" className="w-[20%] md:w-[8%]">
            <img src={Logo} alt="" />
        </a>
    </div>
  </div>;
};

export default Footer;

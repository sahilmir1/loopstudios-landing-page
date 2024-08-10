import { useState } from "react";

interface NavLinks {
  name: string;
  link: string;
}

interface NavbarProps {
  links: NavLinks[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div
      className={`absolute flex flex-col lg:flex-row flex-wrap  md:bg-transparent lg:justify-between w-full lg:h-0 p-10 lg:pt-16 lg:px-[150px] z-20 transition-all duration-300 h-full ${
        openNav ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex w-full lg:w-1/2 justify-between items-center">
        <img src="./assets/logo.svg" alt="" />
        <img
          src={
            openNav ? `./assets/icon-close.svg` : "./assets/icon-hamburger.svg"
          }
          className="w-[24px] h-[20px] lg:hidden cursor-pointer"
          alt=""
          onClick={() => setOpenNav(!openNav)}
        />
      </div>

      {/* Nav Links */}
      <div className={`my-auto ${openNav ? "block" : "hidden"} lg:block`}>
        <ul className="flex flex-col lg:flex-row gap-10 text-white font-josefin uppercase lg:capitalize font-light text-2xl lg:text-lg lg:font-alata lg:font-normal">
          {links.map((link, index) => (
            <li className="relative group" key={index}>
              <a href={link.link}>{link.name}</a>
              <div className="absolute left-0 lg:right-0 border-b-2 top-8 w-[50px] lg:w-1/2 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

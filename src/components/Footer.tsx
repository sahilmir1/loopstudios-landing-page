import React from "react";

interface NavLinks {
  name: string;
  link: string;
}

interface FooterProps {
  links: NavLinks[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  const icons = [
    { icon: "./assets/icon-facebook.svg", link: "/" },
    { icon: "./assets/icon-twitter.svg", link: "/" },
    { icon: "./assets/icon-pinterest.svg", link: "/" },
    { icon: "./assets/icon-instagram.svg", link: "/" },
  ];
  return (
    <div className="bg-black lg:px-[150px] py-10">
      <div className="flex justify-center lg:justify-between flex-wrap">
        <div className="flex flex-col items-center lg:items-start">
          <img src="./assets/logo.svg" alt="" />
          <ul className="grid grid-cols-1 lg:grid-cols-5 gap-10 my-6">
            {links.map((item, index) => (
              <li key={index}>
                <a className="text-white font-alata" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex gap-4 mb-6 justify-center lg:justify-end">
            {icons.map((item, index) => (
              <a href={item.link} key={index}>
                <img src={item.icon} alt="" />
              </a>
            ))}
          </div>
          <span className="text-dark-gray font-alata">
            © 2021 Loopstudios. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

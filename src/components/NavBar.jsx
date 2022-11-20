import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Bars3, LogoReact } from "../assets/icons";

export const NavBar = ({ setIsMenuOpen }) => {
  return (
    <>
      <div className="flex w-full h-12 text-white text-lg bg-black justify-between md:justify-center gap-4">
        <Link to="home" spy={true} smooth={true} duration={1000} offset={-50}>
          <LogoReact className="h-full ml-2 hover:cursor-pointer" />
        </Link>

        <nav className="flex items-center">
          <ul className="hidden md:flex gap-4">
            <li className="hover:text-primary cursor-pointer ">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-50}
              >
                About me
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-50}
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-50}
              >
                Projects
              </Link>
            </li>
            {/* <li className="hover:text-primary cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-50}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>

        <button
          className="flex mr-2 items-center hover:cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3 />
        </button>
      </div>

      <div className="h-0.5 w-full bg-primary"></div>
    </>
  );
};

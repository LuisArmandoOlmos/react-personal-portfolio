import React from "react";
import { LogoReact } from "../assets/icons/LogoReact";

export const NavBar = () => {
  return (
    <>
      <div className="flex w-full h-12 text-white text-lg bg-black justify-center ">
        <LogoReact className="w-9 h-full mr-4 flex items-center hover:cursor-pointer" />

        <nav className=" flex items-center">
          <ul className="flex gap-4">
            <li className="hover:text-primary">
              <link rel="stylesheet" href="" />
              About
            </li>
            <li className="hover:text-primary">
              <link rel="stylesheet" href="" />
              Skills
            </li>
            <li className="hover:text-primary">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="h-0.5 w-full bg-primary"></div>
    </>
  );
};

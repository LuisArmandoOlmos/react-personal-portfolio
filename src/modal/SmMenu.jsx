import ReactDOM from "react-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { Cancel, LogoReact } from "../assets/icons";

export const SmMenu = ({ setIsMenuOpen }) => {
  return ReactDOM.createPortal(
    <section
      className="
        -bottom-0
        -left-0
        -right-0
        -top-0
        bg-black
        fixed
        flex
        flex-col
        items-center
        text-white
        text-xl
      "
    >
      <div className="flex w-full h-12 justify-between items-center">
        <Link
          to="home"
          spy={true}
          offset={-50}
          onClick={() => setIsMenuOpen(false)}
        >
          <LogoReact className="h-full ml-2 hover:cursor-pointer" />
        </Link>

        <div className="flex items-center mr-2 h-12">
          <Cancel
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>

      <ul className="mt-5 w-[calc(100vw-82px)] h-full flex flex-col items-end text-end">
        <li className="hover:text-primary cursor-pointer border-b-2 w-full py-2 border-primary">
          <Link
            to="about"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            About me
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer border-b-2 w-full py-2 border-primary">
          <Link
            to="skills"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer border-b-2 w-full py-2 border-primary">
          <Link
            to="projects"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        {/* <li className="hover:text-primary cursor-pointer border-b-2 w-full py-2 border-primary">
          <Link
            to="contact"
            spy={true}
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </li> */}
      </ul>
    </section>,
    document.getElementById("smMenu")
  );
};

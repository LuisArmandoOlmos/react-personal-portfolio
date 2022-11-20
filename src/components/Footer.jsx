import logoGitHubWhite from "../assets/images/logoGitHubWhite.png";
import logoLinkedin from "../assets/images/logoLinkedin.png";

export const Footer = () => {
  return (
    <div className="flex w-full h-12 text-white text-lg bg-black justify-center md:justify-center gap-3 p-2">
      <a
        href="https://github.com/LuisArmandoOlmos/"
        target="_blank"
      >
        <img src={logoGitHubWhite} alt="Logo GitHub" className="h-full" />
      </a>
      <a
        href="https://www.linkedin.com/in/luis-armando-olmos-622a85247/"
        target="_blank"
      >
        <img src={logoLinkedin} alt="Logo Linkedin" className="h-full" />
      </a>
    </div>
  );
};

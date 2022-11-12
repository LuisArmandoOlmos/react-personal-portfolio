import logoReact from "../assets/images/logoReact.png";
import logoHTML5 from "../assets/images/logoHTML5.png";
import logoCSS3 from "../assets/images/logoCSS3.png";
import logoJavaScript from "../assets/images/logoJavaScript.png";
import logoTailwindCSS from "../assets/images/logoTailwindCSS.png";
import logoGit from "../assets/images/logoGit.png";
import logoGitHub from "../assets/images/logoGitHub.png";
import logoIllustrator from "../assets/images/logoIllustrator.png";
import logoPhotoshop from "../assets/images/logoPhotoshop.png";

export const Skills = ({ id }) => {
  const skillsList = [
    {
      name: "HTML",
      text: "Logo HTML",
      logoImg: logoHTML5,
    },
    {
      name: "CSS",
      text: "Logo CSS",
      logoImg: logoCSS3,
    },
    {
      name: "JavaScript",
      text: "Logo JavaScript",
      logoImg: logoJavaScript,
    },
    {
      name: "React",
      text: "Logo React",
      logoImg: logoReact,
    },
    {
      name: "Tailwind",
      text: "Logo Tailwind",
      logoImg: logoTailwindCSS,
    },
    {
      name: "Git",
      text: "Logo Git",
      logoImg: logoGit,
    },
    {
      name: "GitHub",
      text: "Logo GitHub",
      logoImg: logoGitHub,
    },
    {
      name: "Illustrator",
      text: "Logo Illustrator",
      logoImg: logoIllustrator,
    },
    {
      name: "Photoshop",
      text: "Logo Photoshop",
      logoImg: logoPhotoshop,
    },
  ];
  return (
    <div
      className="bg-secondary flex flex-col items-center justify-center h-[calc(100vh-50px)] text-white"
      id={id}
    >
      <h2 className="w-[76%] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-1 md:mb-2 lg:mb-3 xl:mb-4">
        Skills
      </h2>
      <div className="bg-tertiary border-2 border-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[69vh] overflow-y-auto lg:overflow-y-hidden rounded-2xl w-[76%] p-6 lg:p-4 gap-3 lg:gap-3 items-center">
        {skillsList.map(({ name, logoImg, text}) => (
          <div
            className="bg-secondary flex flex-col items-center justify-center rounded-lg auto-col-max h-[calc(23vh-22px)] p-2"
            key={name}
          >
            <img alt={text} className="h-[50%] mb-1" src={logoImg} />
            <h3 className="md:text-lg md:font-medium">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

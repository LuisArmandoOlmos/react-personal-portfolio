import todoMachine from "../assets/images/todoMachine.png";

export const Projects = ({ id }) => {
  const as = id;
  const projectsList = [
    {
      name: "Hero finder",
      projectsImg: todoMachine,
      projectUrl: "https://luis-olmos-hero-finder.netlify.app/",
      projectRepository: "https://github.com/LuisArmandoOlmos/react-hero-finder-app",
      textP: "It is a web page to search for information on the heroes shown.",
      textAlt: "Hero finder image",
    },
    {
      name: "Gif Express",
      projectsImg: todoMachine,
      projectUrl: "https://luis-olmos-gif-express.netlify.app/",
      projectRepository: "https://github.com/LuisArmandoOlmos/react-gif-express-app",
      textP: "It is a web page to search gif easily and quickly..",
      textAlt: "Coming soon",
    },
    {
      name: "Todo Machine",
      projectsImg: todoMachine,
      projectUrl: "https://luisarmandoolmos.github.io/react-todo-machine/",
      projectRepository: "https://github.com/LuisArmandoOlmos/react-todo-machine",
      textP: "It is a web page that helps you manage and check pending tasks.",
      textAlt: "Todo Machine Image",
    },
  ];
  return (
    <div
      className="bg-tertiary flex flex-col items-center justify-center h-[calc(100vh-98px)] text-white"
      id={id}
    >
      <h2 className="w-[76%] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-1 md:mb-2 lg:mb-3 xl:mb-4">
        Projects
      </h2>
      <div className="bg-secondary border-2 border-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[69vh] overflow-y-auto md:overflow-y-hidden rounded-2xl w-[76%] items-center p-6 md:p-4 gap-3">
        {projectsList.map(
          ({
            name,
            projectsImg,
            projectUrl,
            projectRepository,
            textP,
            textAlt,
          }) => (
            <div
              className="bg-tertiary h-[calc(34.5vh-27px)] rounded-lg flex flex-col justify-center text-justify gap-1 p-4 min-h-[200px]"
              key={name}
            >
              <h3 className="text-lg font-medium text-primary">{name}</h3>
              <p>{textP}</p>
              <a
                href={projectUrl}
                className="text-primary"
                target="_blank"
              >Project link </a>
              <a
                href={projectRepository}
                className="text-primary"
                target="_blank"
              >Project repository</a>
            </div>
          )
        )}
        <div
          className="bg-tertiary h-[calc(34.5vh-27px)] rounded-lg flex flex-col justify-center text-justify gap-1 p-4 min-h-[200px]"
        >
          <img
            alt="Coming soon"
            className="w-[25%] object-cover object-center hidden"
            src={todoMachine}
          />
          <h3 className="text-lg font-medium text-primary">Coming soon</h3>
          <p>A new project will be added soon.</p>
        </div>
      </div>
    </div>
  );
};

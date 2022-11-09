import foto from "../assets/foto.webp";

export const About = ({ id }) => {
  return (
    <div
      className="min-h-[calc(100vh-50px)] bg-tertiary flex flex-col items-center justify-center text-white md:text-lg xl:text-2xl"
      id={id}
    >
      <h2 className="text-2xl font-medium w-[76%] pb-2 md:text-3xl xl:text-4xl">
        Abaut me
      </h2>
      <div className="w-[76%] h-[75vh] flex flex-col items-center border-2 rounded-2xl border-primary py-[4%] bg-secondary xl:flex-row xl:justify-center xl:py-0 xl:border-4">
        <div className="h-[50%] w-[90%] flex items-end md:h-[73%] xl:w-[35%] xl:h-[100%] xl:">
          <img
            className="h-[100%] w-[100%] object-cover object-center rounded-t-xl md:object-top xl:rounded-tr-none xl:rounded-l-xl"
            src={foto}
            alt=""
          />
        </div>
        <div className="h-[50%] w-[90%] flex flex-col md:h-[27%] xl:w-[65%] xl:h-[100%]">
          <div className="h-[85%] overflow-y-auto my-2 xl:h-full xl:p-9">
            <p className="text-justify">
              My name is Luis Armando Olmos Olmos, I am a Web Developer focused
              on Front-End. I seek to collaborate in different projects in the
              elaboration of web pages that are attractive and functional,
              through multiple knowledge that I have acquired in my learning.
            </p>
          </div>
          <button className="h-[15%] bg-primary rounded-b-xl text-secondary font-medium md:font-semibold xl:rounded-bl-none xl:rounded-br-xl">
            Download resume
          </button>
        </div>
      </div>
    </div>
  );
};

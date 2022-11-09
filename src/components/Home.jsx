export const Home = ({ id }) => {
  return (
    <div
      className="min-h-[calc(100vh-50px)] bg-secondary flex flex-col justify-center"
      id={id}
    >
      <div className="w-full p-[12%]">
        <p className="text-white text-2xl md:text-3xl xl:text-4xl font-medium">
          Hi, my name is
        </p>
        <p className="text-primary text-4xl md:text-4xl xl:text-6xl font-bold">
          Luis Armando Olmos Olmos
        </p>
        <p className="text-white text-2xl md:text-3xl xl:text-4xl font-bold">
          I`m Web Developer / Front-End
        </p>
      </div>
    </div>
  );
};

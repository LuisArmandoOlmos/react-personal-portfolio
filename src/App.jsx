import {
  Header,
  Main,
  Footer,
  Home,
  About,
  Skills,
  Projects,
  Contact,
  NavBar,
} from "./components";

export const App = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </Main>
      <Footer></Footer>
    </>
  );
};

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
import { SmMenu } from "./modal/SmMenu";
import { useState } from "react";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header>
        <NavBar setIsMenuOpen={setIsMenuOpen} />
      </Header>
      <Main>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        {/* <Contact id="contact" /> */}
      </Main>
      <Footer></Footer>
      {!!isMenuOpen && <SmMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};

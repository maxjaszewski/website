import { IndentedWrapper, NavBar, View } from "./App.styles";
import { useRef } from "react";
import About from "./About";
import { Element } from "react-scroll";
import SectionLink from "./Link";
import Tetris from "./Tetris";

function App() {
  const aboutRef = useRef();

  return (
    <div className="App">
      <NavBar>
        <SectionLink toItem="about">About</SectionLink>
        <SectionLink toItem="project">Projects</SectionLink>
        <IndentedWrapper>
          <SectionLink toItem="tetris">Tetris</SectionLink>
        </IndentedWrapper>
      </NavBar>

      <View>
        <Element name="about">
          <About />
        </Element>
        <Element name="project">
          <h1>Projects</h1>
          <Element name="tetris">
            <h2>Tetris</h2>
            <Tetris/>
          </Element>
          
        </Element>

      </View>
    </div>
  );
}

export default App;

import Header from "./Header";
import { NavBar, View } from "./App.styles";
import { useRef } from "react";
import About from "./About";
import { Element } from "react-scroll";
import SectionLink from "./Link";

function App() {
  const aboutRef = useRef();

  return (
    <div className="App">
      <NavBar>
        <SectionLink toItem="about">About</SectionLink>
        <SectionLink toItem="about">Projects</SectionLink>
      </NavBar>

      <View>
        <Header />
        <Element name="about">
          <About />
        </Element>
        <Element name="project">
          <h1> Project </h1>
        </Element>
      </View>
    </div>
  );
}

export default App;

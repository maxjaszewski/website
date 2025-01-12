import { View } from "./App.styles";

import Project from "./Project";
import SocialMediaIcons from "./icons";

const projects = [
  {
    title: "Tetris using Functional Programming and the RxJs library",
    description: `
    Tetris implementation using the RxJS library and functional programming principles. This
    project was produced for the FIT2102 Programming Paradigms unit at Monash University.`,
    link: "https://maxjaszewski.github.io/FIT2102-Assignment1",
    image: "/website/assets/tetris.png",
    source: undefined,
  },
  {
    title: "Personal Website",
    description: `
    Personal website using TypeScript and React. Styling in CSS and styled-components.
    Deployed on Github Pages and built using Github Actions.
    `,
    link: "https://maxjaszewski.github.io/website",
    source: "https://github.com/maxjaszewski/website",
  },
];

function App() {
  return (
    <div style={{ display: "flex", marginTop: "10px" }}>
      <div style={{ flex: 1 }}></div>
      <View>
        <h1>Max Jaszewski</h1>
        <SocialMediaIcons/>
        <p>
          Devops Engineer - National Australia Bank <br />
          2024 Graduate - Bachelor of Computer Science - Monash University<br />
          Interested in Data structures and algorithms.<br />
        </p>
        <h2>Projects</h2>
        <div>
          {projects.map((project) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                link={project.link}
                source={project.source}
                image={project.image}
              />
            );
          })}
        </div>
      </View>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

export default App;

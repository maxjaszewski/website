import { View } from "./App.styles";

import Project from "./Project";
import SocialMediaIcons from "./icons";

const projects = [
  {
    title: "Functional Tetris",
    description: `
    Tetris implementation using Typescript, RxJS library and functional programming style`,
    link: "https://maxjaszewski.github.io/FunctionalTetris/",
    image: "/website/assets/tetris.png",
    source: "https://github.com/maxjaszewski/FunctionalTetris",
  },
  {
    title: "Task manager",
    description: `
    Containerised task manager web app built using Typescript, React, Java, Spring and PostgreSQL
    `,
    link: undefined,
    image: "/website/assets/task.png",
    source: "https://github.com/maxjaszewski/Task-Management-Application",
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

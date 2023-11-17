import Header from "./Header";

export default function About() {
  return (
    <div>
      <Header />
      <p>
        Software Engineer. Interested in Data structures and algorithms.
        <br />
        This page was written using:
        <ul>
            <li>React + Typescript for UX</li>
            <li>Jest + Cypress for testing</li>
            <li>Create React App for SWLC</li>
            <li>Github Pages for hosting</li>
        </ul>
      </p>
    </div>
  );
}

import BeforeAfter from "./BeforeAfterEmbedJs";

export default function Parser() {
  return (
    <div>
      <h2>Javascript Parser in Haskell</h2>
      Haskell implementation of Javascript Parsing.
      <br />
      Some key features are:
      <ul>
        <li>Parsing variables</li>
        <li>Parsing Expressions</li>
        <li>Autoformatting multiline statements</li>
        <li>Implementing Tail Cail Optimisation for Javascript</li>
      </ul>
      <div>
        <h3>- Parsing Ternary Expressions</h3>
        <BeforeAfter file="ternary3"></BeforeAfter>
        <h3>- Parsing Function Calls</h3>
        <BeforeAfter file="funcdef2"></BeforeAfter>
        <h3>- Parsing and implementing Tail Call Optimisation</h3>
        <BeforeAfter file="tailRecursive2"></BeforeAfter>
      </div>
    </div>
  );
}

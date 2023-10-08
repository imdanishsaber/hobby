import React from "react";
import "./styles.css";
import FamilyTree from "./components/familyTree";
import members from "./family";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <FamilyTree members={members} />
    </div>
  );
}

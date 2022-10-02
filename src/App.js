import React, { useState } from "react";

import "./App.css";
import Mountain from "./Mountain";
import Beaches from "./Beaches";

function App() {
  const [selectedPage, setSelectedPage] = useState("Mountain");

  return (
    <div className="container">
      <header>
        <button
          onClick={() => {
            setSelectedPage("Mountain");
          }}
        >
          Mountain
        </button>
        <button
          onClick={() => {
            setSelectedPage("Beaches");
          }}
        >
          Beaches
        </button>
      </header>
      {selectedPage === "Mountain" ? <Mountain /> : null}
      {selectedPage === "Beaches" ? <Beaches /> : null}
    </div>
  );
}

export default App;

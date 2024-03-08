import React from "react";
import "./App.css";
import { FetchPrueba } from "./components/fetch/FetchPrueba";
import StateLogin from "./useContext/loginContext/StatusLogin";

function App() {
  return (
    <StateLogin>
      <div className="App">
        <header className="App-header">
          <FetchPrueba></FetchPrueba>
        </header>
      </div>
    </StateLogin>
  );
}

export default App;

import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <p className="githup">
          This project was codedd by Kimia Fatehi is opened-source on{" "}
          <a href="https://github.com/Kimiaparand/weather-react-app">Github</a>
        </p>
      </header>
    </div>
  );
}

export default App;

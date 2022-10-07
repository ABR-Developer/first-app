import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [colorMode, setColorMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1000);
  };

  const colorModeToggler = () => {
    // colorMode === 'light' ? setColorMode('dark') : setColorMode('light');
    if (colorMode === "light") {
      setColorMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "danger");
    } else {
      setColorMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "warning");
    }
  };

  // {setInterval(() => document.title = "Amazing Website" ,2000)}
  // {setInterval(() => document.title = "Excellent Website" ,1500)}

  return (
    <div className="App">
      <Router>
        <NavBar
          title="LOGO HERE"
          aboutText="About"
          mode={colorMode}
          colorModeHandler={colorModeToggler}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            path="/text-form"
            element={
              <TextForm
                formHeading="Enter the text to Capitalize"
                mode={colorMode}
                showAlert={showAlert}
              />
            }
          />
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/text-form">
            <TextForm
              formHeading="Enter the text to Capitalize"
              mode={colorMode}
              showAlert={showAlert}
            />
          </Route> */}
        </Routes>
        {/* <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
      </Router>
    </div>
  );
}

export default App;

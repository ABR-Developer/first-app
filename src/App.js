import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [colorMode, setColorMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    });
    setTimeout(() => setAlert(null), 1000);
  }
  
  const colorModeToggler  = () =>{
    // colorMode === 'light' ? setColorMode('dark') : setColorMode('light');
    if(colorMode === 'light'){
      setColorMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled" , "danger");
    }
    else{
      setColorMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "warning");
    }
  }

  return (
    <>
      <NavBar title="LOGO HERE" aboutText="About" mode={colorMode} colorModeHandler={colorModeToggler} />
      <Alert alert={alert}/>
      <TextForm formHeading ="Enter the text to Capitalize" mode={colorMode} showAlert={showAlert}/>
      {/* <About /> */}
      <div className="App">
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
    </>
  );
}

export default App;
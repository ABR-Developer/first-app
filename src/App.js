import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar title="LOGO HERE" aboutText="About"/>             {/* passing props to component */}
      {/* <NavBar />                                                not passing props to component 1 - defaultProps will  be used here , 2 - if there is no default props then component will be empty , 3 - if there is not default props and any prop is required then error will occur */}
      {/* <NavBar title={3} aboutText="About"/>                     error because title's propType donot match */}
      {/* <NavBar title="LOGO HERE" aboutText={5}/>                 error because aboutText's propType donot match */}
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
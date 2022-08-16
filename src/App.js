import logo from './logo.svg';
import './App.css';

let name = "Ali";
function App() {
  let name = "Hassan";
  name = "<b>Hassan</b>";
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <div className="containter">
        <h2>
          Hello {name}                          {/* JSX */}
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore hic, officiis similique mollitia tempora error rem at incidunt, voluptate, culpa magnam esse eius blanditiis temporibus neque animi. Eveniet, libero at.</p>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from './homepage/HomePage';
import SignUp from './signup/SignUp';
import Signin from './signin/Signin';
import Router from './Routes/Router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;

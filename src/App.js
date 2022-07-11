import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pure/greetingClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <GreetingClass name="Vittorio"></GreetingClass>
      </header>
    </div>
  );
}

export default App;

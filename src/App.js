import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pure/greetingClass';
import GreetingFunction from './components/pure/greetingFunction';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <GreetingClass name="Vittorio"></GreetingClass>
      <GreetingFunction name="Aquiles"></GreetingFunction>
      </header>
    </div>
  );
}

export default App;

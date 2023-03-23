import Home from './Home';
import Navbar from './Navbar';

function App() {
  const hello = "Hello from React."
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;

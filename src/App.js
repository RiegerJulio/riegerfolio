import './App.css';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;

import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <div className="header">
          <h1>Travelize</h1>
          <p>My traveling experiences</p>
        </div>
        <div className="nav-list">
          <a>Home</a>
          <a>Blog</a>
          <a className="button">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;

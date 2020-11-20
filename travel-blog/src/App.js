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
      <div className="main-section">
        <img src={heroBackground} alt="jumbotron" />
        <div className="content">
          <img src={headshot} alt="headshot" />
          <div className="introduction">
            <h2>A little about me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ante metus dictum at tempor commodo. Pellentesque id nibh tortor id aliquet. Proin libero nunc consequat interdum.
            </p>
            <p>
              At erat pellentesque adipiscing commodo elit at imperdiet. Tortor posuere ac ut consequat semper. Nisi lacus sed viverra tellus in hac. Nunc aliquet bibendum enim facilisis gravida. Augue mauris augue neque gravida in. Nibh mauris cursus mattis molestie a. Ut etiam sit amet nisl purus in mollis nunc. Sodales ut eu sem integer vitae justo eget magna fermentum. Quis enim lobortis scelerisque fermentum. Purus semper eget duis at tellus at urna. Et tortor at risus viverra. Non odio euismod lacinia at quis risus. Amet justo donec enim diam vulputate ut.
    </p>
            <p>
              Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Nam at lectus urna duis convallis. Sem nulla pharetra diam sit amet. Vestibulum lorem sed risus ultricies tristique nulla. Non blandit massa enim nec dui nunc mattis enim. Quis commodo odio aenean sed adipiscing diam donec. Ornare massa eget egestas purus viverra. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Lectus sit amet est placerat in. Quis auctor elit sed vulputate mi sit.
</p>
            <p>
              Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Quisque egestas diam in arcu cursus. Ultrices eros in cursus turpis massa tincidunt dui ut. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Praesent elementum facilisis leo vel fringilla est ullamcorper. Viverra justo nec ultrices dui sapien. Eu non diam phasellus vestibulum. Eu feugiat pretium nibh ipsum consequat. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Mollis nunc sed id semper risus in hendrerit gravida. Est ultricies integer quis auctor elit sed. Nunc consequat interdum varius sit amet mattis.
</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

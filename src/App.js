import './App.css';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import GlobalStyle from './styles/GlobalStyle';
import Typography from './styles/Typography';
import SmoothScrollbar from './components/SmoothScrollbar';

function App() {

  return (
    <div className="App">


      <GlobalStyle />
      <Typography />
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>

          <Routes>
            <Route path='/project' element={<Project />} />
          </Routes>

          <Routes>
            <Route path='/contact' element={<Contacts />} />
          </Routes>
        </SmoothScrollbar>

      </Router>

    </div>
  );
}

export default App;

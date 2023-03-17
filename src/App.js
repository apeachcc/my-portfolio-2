// App
// Header
// Home page
// Projects page
// Project (on Projects page)
// Contact page
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Router>
    <div>
       <Header/>
        <Routes>
          <Route path="/" element={<Home name={"Finn"} title={"Adventurer"}/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Project" element={<Project/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

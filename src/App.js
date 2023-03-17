// App
// Header
// Home page
// Projects page
// Project (on Projects page)
// Contact page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;





// function App() {
//   return (
//     <Router>
//     <div>
//        <Header/>
//         <Switch>
//           <Route path="/" component={Home}  />
//           <Route path="/Contact" component={Contact}/>
//           <Route path="/Project" component={Project}/>
//         </Switch>
//     </div>
//     </Router>
//   );
// }


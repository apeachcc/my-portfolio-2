// App
// Header
// Home page
// Projects page
// Project (on Projects page)
// Contact page
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
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
//           <Route path="/Contact" element={<Contact/>}  component={Contact}/>
//           <Route path="/Project" element={<Project/>}  component={Project}/>
//         </Switch>
//     </div>
//     </Router>
//   );
// }


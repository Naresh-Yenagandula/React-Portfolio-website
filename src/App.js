import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home'
import Navbars from "./components/Navbar";
import About from './components/About';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Skill from './components/Skill';
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbars/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skill} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

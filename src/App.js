import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';

import './App.css';

const BASE_URL='http://localhost:3000'

function App() {
  return (
    <div className="App">
      < Navigation baseUrl={BASE_URL} />
      <Router>
        <Switch>
          <Route exact path='/' baseUrl={BASE_URL}>
            < Home />
          </Route>
          <Route path='/portfolio'>
            < Portfolio />
          </Route>
          <Route path='/bio'>
            < Bio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
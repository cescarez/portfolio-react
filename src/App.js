import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';

import './App.css';

function App() {
  return (
    <div className="App">
      < Navigation />
      <Router>
        <Switch>
          <Route exact path='/'>
            < Home />
          </Route>
          {/* <Route path='/portfolio'>
            < Portfolio />
          </Route> */}
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/bio'>
            < Bio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
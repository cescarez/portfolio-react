import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Resume from './components/Resume';

import './App.css';

function App() {
    return (
        <div className="App">
        <Navigation />
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/'>
                    < Home />
                </Route>
                <Route path='/portfolio'>
                    < Portfolio />
                </Route>
                <Route path='/bio'>
                    < Bio />
                </Route>
                <Route path='/resume'>
                    < Resume />
                </Route>
            </Switch>
        </Router>
        </div>
    );
}

export default App;
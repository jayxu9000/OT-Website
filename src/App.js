import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rush from './Rush';
import Brothers from './Brothers';
import Merchandise from './Merchandise';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>UB Theta Tau</title>
        </Helmet>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/OT-Website">
              <Home />
            </Route>
            <Route path="/Rush">
              <Rush />
            </Route>
            <Route path="/Brothers">
              <Brothers />
            </Route>
            <Route path="/Merchandise">
              <Merchandise />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

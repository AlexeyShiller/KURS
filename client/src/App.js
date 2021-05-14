import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './Components/Navibar';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Components/Home';
import Companies from './Components/Companies';
import { Comments } from './Components/Comments';

function App() {
  return (
    <div className="page-content">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/companies" component={Companies} />
          <Route path="/comments" component={Comments} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Visit from './Pages/Visit';
import FastTrack from './Pages/FastTrack';

// eslint-disable-next-line
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/visit" component={Visit} />
            <Route exact path="/fast" component={FastTrack} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default Routes;

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Profile } from '../containers';
import { Home, About } from '../components';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="profile/:username" component={Profile} />
        </Route>
    </Router>
)

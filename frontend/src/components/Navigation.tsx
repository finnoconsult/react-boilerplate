import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './About';
import App from './App';

export default function Navigation(): JSX.Element {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/app/">App</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={About} />
        <Route path="/app/" component={App} />
      </div>
    </Router>
  );
}

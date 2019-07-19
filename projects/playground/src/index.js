import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Button from './components/Button';

ReactDOM.render(<ThemeProvider theme={theme}><Button cta title="Click me!" /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

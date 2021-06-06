import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../shared/Header';
import { StarWarsNameClass } from '../shared/stateLearn';

window.addEventListener('load', () => {
    // ReactDOM.hydrate(<Header />, document.getElementById('react_root'));
    ReactDOM.render(<StarWarsNameClass />, document.getElementById('react_root'));
});

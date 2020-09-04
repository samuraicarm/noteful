import React from 'react';
import ReactDOM from 'react-dom';
import CreateFolder from './CreateFolder';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
});
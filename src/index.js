import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
//flux
// import App from './flux/view/App';
//redux
// import App from './redux/view/App';
//redux with context
// import App from './redux-with-context/view/App';
//react-redux
import App from './react-redux/view/App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

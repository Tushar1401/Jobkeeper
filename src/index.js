import React from 'react';
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
// import { render } from '@testing-library/react';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App tab='home' />
//   </Provider>
// );

const root = document.getElementById("root");
render(<App />, root);

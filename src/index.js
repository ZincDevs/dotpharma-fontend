import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';
import { Provider } from 'react-redux';
import App from './views/App';
import store from './redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

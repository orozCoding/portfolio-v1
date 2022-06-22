import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

AOS.init();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {setTimeout(() => {
        return <App />
      }, 2000)}
    </Provider>
  </React.StrictMode>
);

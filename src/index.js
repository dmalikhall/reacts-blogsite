import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/Navbar.css';
import '../src/styles/Categories.css';
import '../src/styles/AllPost.css';
import '../src/styles/Footer.css';



import App from './App';
import { AppProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <App />
  </AppProvider>

);


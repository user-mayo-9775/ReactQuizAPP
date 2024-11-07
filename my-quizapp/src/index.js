
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import QuizApp from './Home';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <QuizApp></QuizApp> */}
   
  </React.StrictMode>
);

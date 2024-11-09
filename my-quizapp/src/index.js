
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import {Route,Routes,BrowserRouter} from "react-router-dom"
import App from './App';
import Questions from './Components/Question';
import TotalProgress from './Components/TotalResult';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route path='/' element={  <App />}/>
  <Route path='/Question' element={<Questions/>}/>
  {/* <Route path='/TotalResult' element={<TotalProgress/>}/>  */}
</Routes>
  

    </BrowserRouter>
    
  
  </React.StrictMode>
);

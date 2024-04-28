import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import { Route,Routs,BrowserRouter } from "react-router-dom";
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <div>
   <BrowserRouter>
   <Routs>
 
   <Route path="/About" elementnt={<About/>} > </Route>
   <Route path="/App" elementnt={<App/>} > </Route>
   <App/>
   <About/>
    </Routs>
   
    </BrowserRouter>
    </div>
  ,
)
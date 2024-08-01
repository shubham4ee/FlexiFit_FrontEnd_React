import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// import { BrowserRouter } from 'react-router-dom'     // this was used in older verion of react router dom

// we import this in updated versions of react router dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// in new verion we can directly specify routs in index.js insted aod specifyig it in app,js
// other path i.e about, contact, append to '/' , index can specify home page
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

// commented part belong to previous verioons of router 

const root = ReactDOM.createRoot(document.getElementById('root'));     // older way of specifying routes
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

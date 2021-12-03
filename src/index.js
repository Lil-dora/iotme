import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
//views
import Head from './view/header';
import Home from './view/home/home';
import Dashboard from './view/dashboard/dashboard';

const Main = () =>{
  return(
  <BrowserRouter>
    <Head/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  )
}

ReactDOM.render(
    <Main/>,
  document.getElementById('root')
);


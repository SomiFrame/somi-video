import React,{Component} from "react";
import Header from '../js/Header.js';
import Home from './home.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";


const Layout = ()=>(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home}/>
        </div>
    </Router>
);
export default Layout;

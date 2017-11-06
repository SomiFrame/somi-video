import React,{Component} from "react";
import Header from '../js/Header.js';
import Home from './home.js';
import VideoInfo from './VideoInfo.js';
import VideoPlay from './VideoPlay.js';
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
            <Route exact path="/videoinfo" component={VideoInfo}/>
            <Route exact path="/videoplay" component={VideoPlay}/>
        </div>
    </Router>
);
export default Layout;

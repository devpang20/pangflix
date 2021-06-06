import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

/* eslint-disable */
export default () => (
    <Router>
        <>
            <Route path="/" exact compoent={Home} />
            <Route path="/tv" exact compoent={TV} />
            <Route path="/search" exact compoent={Search} />
        </>
    </Router>
);
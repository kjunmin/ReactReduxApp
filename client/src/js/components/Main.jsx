import React from 'react';
import { Route } from "react-router-dom";
import Home from "./Home.jsx";

const Main = () => (
    <div className="inner-container">
        <Route exact path="/" component={ Home }></Route>
    </div> 
)

export default Main;
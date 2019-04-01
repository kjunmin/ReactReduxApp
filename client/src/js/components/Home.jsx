import React, { Component } from 'react';
import List from "./List.jsx";
import {getData} from "../actions/index";

class Home extends Component{
    constructor() {
        super();

    }

    render() {
        return(
            <div className="jumbotron">
                <h1>Home</h1>
                <p>This is an example text</p>
                <List />
            </div>
        )
    }
}

export default Home;
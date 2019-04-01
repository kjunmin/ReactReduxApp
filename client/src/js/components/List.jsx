import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBusSchedule } from "../actions/index";

const mapStateToProps = state => {
    const { busDetails } = state;
    return {
        busDetails
    }
}


class ConnectedList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getBusSchedule();
    }

    render() {
        
        if (!this.props.busDetails.Services) return null;
        const { busDetails } = this.props;
        return (
            <ul className="list-group">
                { busDetails.Services.map( el => (
                    <li key={el.ServiceNo}>{el.Operator}</li>
                ))}
            </ul>
        );
    }
}

const List = connect(mapStateToProps, { getBusSchedule }) (ConnectedList);

export default List;
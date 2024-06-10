import React from 'react';
import FlotChart from "./chart";
import Summary from "./summary";

function Dashboard(props) {

    return (
        <div className="wrapper wrapper-content">
            <Summary/>
            <FlotChart/>
        </div>
    );
}

export default Dashboard;

import React from 'react';

function ChartSummary(props) {
    return (
        <div className="col-lg-3">
            <ul className="stat-list">
                <li>
                    <h2 className="no-margins">2,346</h2>
                    <small>Total orders in period</small>
                    <div className="stat-percent">48% <i
                        className="fa fa-level-up text-navy"></i></div>
                    <div className="progress progress-mini">
                        <div className="progress-bar"></div>
                    </div>
                </li>
                <li>
                    <h2 className="no-margins ">4,422</h2>
                    <small>Orders in last month</small>
                    <div className="stat-percent">60% <i
                        className="fa fa-level-down text-navy"></i>
                    </div>
                    <div className="progress progress-mini">
                        <div className="progress-bar"></div>
                    </div>
                </li>
                <li>
                    <h2 className="no-margins ">9,180</h2>
                    <small>Monthly income from orders</small>
                    <div className="stat-percent">22% <i
                        className="fa fa-bolt text-navy"></i></div>
                    <div className="progress progress-mini">
                        <div className="progress-bar"></div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ChartSummary;

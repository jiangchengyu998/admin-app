import React, { useRef, useState} from 'react';

function Dashboard(props) {
    const [state, setState] = useState({
        monthAccount: 5000,
        monthPercent: "2%",
        orderNumber: 50,
        orderPercent: "30%",
        visitNumber: 50,
        visitPercent: "40%",
        refundNumber: 50,
        refundPercent: "40%",
    });

    const chartRef = useRef(null);

    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-3">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-success pull-right">Income</span>
                            <h5>当前月收入(元)</h5>
                        </div>
                        <div className="ibox-content">
                            <h1 className="no-margins">{state.monthAccount}</h1>
                            <div className="stat-percent font-bold text-success">{state.monthPercent}
                                <i className="fa fa-level-up"></i>
                            </div>
                            <small>Monthly income</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-info pull-right">Order</span>
                            <h5>当前月订单数</h5>
                        </div>
                        <div className="ibox-content">
                            <h1 className="no-margins">{state.orderNumber}</h1>
                            <div className="stat-percent font-bold text-info">{state.orderPercent} <i className="fa fa-level-up"></i></div>
                            <small>Monthly orders</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-primary pull-right">Today</span>
                            <h5>访问量</h5>
                        </div>
                        <div className="ibox-content">
                            <h1 className="no-margins">{state.visitNumber}</h1>
                            <div className="stat-percent font-bold text-navy">{state.visitPercent} <i
                                className="fa fa-level-up"></i></div>
                            <small>New visits</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-danger pull-right">Refund</span>
                            <h5>当前月退单数</h5>
                        </div>
                        <div className="ibox-content">
                            <h1 className="no-margins">{state.refundNumber}</h1>
                            <div className="stat-percent font-bold text-danger">{state.refundPercent}
                            </div>
                            <small>Monthly refund</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Orders</h5>
                            <div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-xs btn-white active">Today</button>
                                    <button type="button" className="btn btn-xs btn-white">Monthly</button>
                                    <button type="button" className="btn btn-xs btn-white">Annual</button>
                                </div>
                            </div>
                        </div>
                        <div className="ibox-content">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="flot-chart">
                                        {/*<div className="flot-chart-content" id="flot-dashboard-chart">asfdf</div>*/}
                                        <div id="flot-dashboard-chart" ref={chartRef}
                                             style={{width: '600px', height: '400px'}}></div>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

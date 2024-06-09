import React from 'react';

function Dashboard(props) {
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
                            <h1 className="no-margins">--月收入啦啦</h1>
                            <div className="stat-percent font-bold text-success" text="${stats.incomePer}">月收入环比<i
                                className="fa fa-level-up"></i></div>
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
                            <h1 className="no-margins" text="${stats.mOrderNum}">--月订单数</h1>
                            <div className="stat-percent font-bold text-info" text="${stats.orderNumPer}">20% <i
                                className="fa fa-level-up"></i></div>
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
                            <h1 className="no-margins" text="${stats.pv}">--访问量</h1>
                            <div className="stat-percent font-bold text-navy">44% <i
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
                            <h1 className="no-margins" text="${stats.mOrderRefund}">80,600</h1>
                            <div className="stat-percent font-bold text-danger"
                                 text="${stats.mOrderRefundPer}">38%
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
                                        <div className="flot-chart-content" id="flot-dashboard-chart"></div>
                                        <input type="hidden" id="data2" value="${data2}"/>
                                        <input type="hidden" id="data3" value="${data3}"/>
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

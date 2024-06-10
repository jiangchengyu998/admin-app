import React, {useState} from 'react';

function Summary(props) {

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

    return (
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
                        <div className="stat-percent font-bold text-info">{state.orderPercent} <i
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
    );
}

export default Summary;

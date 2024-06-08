import React from 'react';

function Index(props) {
    return (
        <div id="wrapper">
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                    	<span>
                            <img alt="image" className="img-circle" src="static/img/cat.jpg" height="48px"
                                 width="48px"/>
						</span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear">
                            	<span className="block m-t-xs">
                            		<strong className="font-bold" text="${session.user.getUserName()}">username</strong>
                             	</span>
                             </span>
                                </a>
                            </div>
                            <div className="logo-element">
                                YX
                            </div>
                        </li>
                        <li>
                            <a href="dashboard.html"><i className="fa fa-diamond"></i> <span
                                className="nav-label">仪表盘</span></a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-bar-chart-o"></i>
                                <span className="nav-label">商品管理</span>
                                <span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse">
                                <li id="itemManage"><a href="item/itemManage.html">商品管理</a></li>
                                <li id="stockManage"><a href="@{stockManage_0_0_0}">库存管理</a></li>
                                <li id="itemCategoryManage"><a href="@{itemCategoryManage_0_0_0}">商品分类</a></li>
                                <li id="recoverManage"><a href="@{recoverManage_0_0_0}">回收管理</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="mailbox.html"><i className="fa fa-envelope"></i> <span
                                className="nav-label">订单管理</span><span
                                className="label label-warning pull-right">16</span></a>
                            <ul className="nav nav-second-level collapse">
                                <li id="orderManage"><a href="@{orderManage_0_0_0}">订单管理</a></li>
                                <li id="orderRefund"><a href="@{orderRefund_0_0_0}">订单退款</a></li>
                                <li id="shippingManage"><a href="@{shippingManage_0_0_0}">发货管理</a></li>
                                <li id="deliveryManage"><a thref="@{deliveryManage}">物流公司</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="nav-label">用户管理</span>
                                <span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li id="userManage"><a href="@{userManage}">信息修改</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
            <div id="page-wrapper" className="gray-bg">
                <div className="row border-bottom">
                    <nav className="navbar navbar-static-top" role="navigation">
                        <div className="navbar-header">
                            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i
                                className="fa fa-bars"></i>
                            </a>
                            <form role="search" className="navbar-form-custom" action="#">
                                <div className="form-group">
                                    <input placeholder="搜索..." className="form-control" name="top-search"
                                           id="top-search"
                                           type="text"/>
                                </div>
                            </form>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li>
                                <span className="m-r-sm text-muted welcome-message">欢迎进入后台信息管理系统.</span>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i className="fa fa-envelope"></i> <span className="label label-warning">16</span>
                                </a>
                                <ul className="dropdown-menu dropdown-messages">
                                    <li>
                                        <div className="dropdown-messages-box">
                                            <a href="#" className="pull-left">
                                                <img alt="image" className="img-circle" src="static/img/a7.jpg"/>
                                            </a>
                                            <div className="media-body">
                                                <small className="pull-right">46h ago</small>
                                                <strong>Mike Loreipsum</strong> started following <strong>Monica
                                                Smith</strong>.
                                                <br/>
                                                <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="dropdown-messages-box">
                                            <a href="#" className="pull-left">
                                                <img alt="image" className="img-circle" src="static/img/a4.jpg"/>
                                            </a>
                                            <div className="media-body ">
                                                <small className="pull-right text-navy">5h ago</small>
                                                <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica
                                                Smith</strong>. <br/>
                                                <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="dropdown-messages-box">
                                            <a href="#" className="pull-left">
                                                <img alt="image" className="img-circle" src="static/img/profile.jpg"/>
                                            </a>
                                            <div className="media-body ">
                                                <small className="pull-right">23h ago</small>
                                                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br/>
                                                <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="text-center link-block">
                                            <a href="#">
                                                <i className="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i className="fa fa-bell"></i> <span className="label label-primary">8</span>
                                </a>
                                <ul className="dropdown-menu dropdown-alerts">
                                    <li>
                                        <a href="#">
                                            <div>
                                                <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                                <span className="pull-right text-muted small">4 minutes ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                                <span className="pull-right text-muted small">12 minutes ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                                <span className="pull-right text-muted small">4 minutes ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="text-center link-block">
                                            <a href="#">
                                                <strong>See All Alerts</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login.html">
                                    <i className="fa fa-sign-out"></i> 登 出
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
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
                                                        <div  className="progress-bar"></div>
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
                <div className="footer">
                    <div className="pull-right">
                        author
                        <strong>hanke</strong>
                    </div>
                    <div>
                        <strong>Copyright</strong> Example Company &copy; 2018-2025
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Index;

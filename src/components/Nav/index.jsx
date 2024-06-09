import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(props) {
    return (
        <div>
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                    	<span>
                            <img alt="image" className="img-circle" src="/public/img/cat.jpg" height="48px" width="48px"/>
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
                            <a>
                                <i className="fa fa-diamond"></i>
                                <span className="nav-label">
                                    <NavLink to="/dashboard">仪表盘</NavLink>
                                </span>
                            </a>
                            {/* 路由链接 */}
                            {/*<NavLink className="list-group-item" to="/dashboard">仪表盘</NavLink>*/}

                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bar-chart-o"></i>
                                <span className="nav-label">
                                    <NavLink to="/itemManager">商品列表</NavLink>
                                </span>
                                {/*<span className="fa arrow"></span>*/}
                            </a>

                        </li>
                        {/*
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
                        */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

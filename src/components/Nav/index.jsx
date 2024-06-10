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
                            <img alt="image" className="img-circle" src="/public/img/cat.jpg" height="48px"
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
                            <NavLink to="/dashboard">仪表盘</NavLink>
                        </li>
                        <li>
                            <NavLink to="/itemManager">商品列表</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

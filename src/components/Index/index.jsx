import React from 'react';
import Nav from "../Nav";
import Footer from "../Footer";
import Header from "../Header";
import Dashboard from "../Dashboard";
import {Route, Routes} from "react-router-dom";
import ItemManager from "../ItemManager";

function Index(props) {
    return (
        <div id="wrapper">
            <Nav/>
            <div id="page-wrapper" className="gray-bg">
                <Header/>
                {/* 注册路由 */}
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/itemManager" element={<ItemManager/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>

    );
}

export default Index;

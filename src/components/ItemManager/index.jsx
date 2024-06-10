import React from 'react';
import ItemHeader from "./itemHeader";
import ItemList from "./itemList";

function ItemManager(props) {
    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <ItemHeader/>
                <ItemList/>
            </div>
        </div>
    );
}

export default ItemManager;

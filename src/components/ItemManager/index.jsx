import React, {useState} from 'react';
import ItemHeader from "./itemHeader";
import ItemList from "./itemList";

function ItemManager(props) {

    const [productPage, setProductPage] = useState({
        "content": [],
        "page": {}
    });
    // 父组件的回调函数
    const handleMessageChange = (productPage) => {
        setProductPage(productPage);
    };

    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <ItemHeader onMessageChange={handleMessageChange}/>
                <ItemList productPage={productPage} />
            </div>
        </div>
    );
}

export default ItemManager;

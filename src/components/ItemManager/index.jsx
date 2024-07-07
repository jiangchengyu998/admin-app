import React, {useState} from 'react';
import ItemHeader from "./itemHeader";
import ItemList from "./itemList";

function ItemManager(props) {

    const [products, setProducts] = useState([]);
    // 父组件的回调函数
    const handleMessageChange = (products) => {
        setProducts(products);
    };

    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <ItemHeader onMessageChange={handleMessageChange}/>
                <ItemList products={products} />
            </div>
        </div>
    );
}

export default ItemManager;

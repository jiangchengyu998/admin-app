import React, {useEffect, useState} from 'react';
import ItemHeader from "./itemHeader";
import ItemList from "./itemList";
import axios from "axios";

function ItemManager(props) {

    const [productPage, setProductPage] = useState({
        "content": [],
        "page": {}
    });

    const [searchForm, setSearchForm] = useState({title:'',category:'',minPrice:'',maxPrice:''});
    const [page, setPage] = useState({pageNumber:1, pageSize:2});

    const fetchData = async () => {
        try {
            const response = await axios.get(`api1/product/page?title=${searchForm.title}&pageNumber=${page.pageNumber}`);
            setProductPage(response.data);
            return response.data;
            // response.data.forEach(item => {dispatch(addItem(item))})
        } catch (error) {
            console.log(error)
            // setError(error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        // 定义一个异步函数来获取数据
        fetchData().then(r => console.log("useEffect",r))
    }, [searchForm,page]); // 空依赖数组表示这个 effect 只在组件挂载和卸载时运行一次


    // 父组件的回调函数 search
    const handleSearchFormChange = (searchForm) => {
        console.log(searchForm);
        setSearchForm(searchForm)
    };

    // 父组件的回调函数 page
    const handlePageFormChange = (page) => {
        setPage(page)
    };

    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <ItemHeader handleSearchFormChange={handleSearchFormChange}/>
                <ItemList productPage={productPage} handlePage={handlePageFormChange} />
            </div>
        </div>
    );
}

export default ItemManager;

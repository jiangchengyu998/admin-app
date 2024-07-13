import React, {useState} from 'react';
import Modal from 'react-modal';
import "./styles.css";
import {Link, useNavigate} from "react-router-dom";
// import {Pagination} from "./Pagination";
import axios from "axios";
import {Pagination} from "antd";

Modal.setAppElement('#root'); // 确保根元素设置正确

function ItemList(props) {
    const productPage = props.productPage;
    console.log("productPage",productPage);
    //number
    // :
    // 0
    // size
    // :
    // 2
    // totalElements
    // :
    // 9
    // totalPages
    // :
    // 5
    const products = productPage.content;
    const [current, setCurrent] = useState(productPage.page.number +1 )

    // 删除逻辑
    const [productToDelete, setProductToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = (product) => {
        setProductToDelete(product);
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setProductToDelete(null);
    };
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    };
    const handleDelete = () => {
        const response = axios.post(`api1/product/delete/${productToDelete.id}`);
        console.log(response)
        closeDeleteModal();
        refreshPage()
    };

    // 改变页码
    const paginate = (pageNumber) => {
        console.log("pageNumber",pageNumber)
        setCurrent(pageNumber)
        props.handlePage({"pageNumber": pageNumber});
    };

    return (
        <div className="col-lg-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5>商品列表</h5>
                    <div className="ibox-tools">
                        <a className="collapse-link">
                            <i className="fa fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
                <div className="ibox-content">
                    <div className="table-responsive">
                        <table className=" table table-hover" data-page-size="10">
                            <thead>
                            <tr>
                                <th width="5%">ID</th>
                                <th width="39%">商品标题</th>
                                <th width="8%">分类</th>
                                <th width="8%">价格</th>
                                <th width="15%">库存数量</th>
                                <th width="15%">更新时间</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((item, index) => (

                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.store}</td>
                                    <td>{item.updateTime}</td>
                                    <td>
                                        <Link to="/itemEdit" state={{...item}}> 修改 <i
                                            className="fa fa-edit text-navy"/></Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a onClick={() => openDeleteModal(item)} title={"删除"}>
                                            <i className="fa fa-trash-o text-navy"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {/*<Pagination*/}
                        {/*    itemsPerPage={productPage.page.size}*/}
                        {/*    totalItems={productPage.page.totalElements}*/}
                        {/*    paginate={paginate}*/}
                        {/*    currentPage={productPage.number +1}*/}
                        {/*/>*/}
                        <Pagination current={current} onChange={paginate}
                                    pageSize={productPage.page.size}
                                    total={productPage.page.totalElements}
                                    showTotal={(total) => `Total ${total} items`}
                        />
                        <Modal
                            isOpen={isDeleteModalOpen}
                            onRequestClose={closeDeleteModal}
                            contentLabel="确认删除"
                            className="delete-modal"
                            overlayClassName="delete-modal-overlay"
                        >
                            <h2>确认删除</h2>
                            <p>你确定要删除 {productToDelete && productToDelete.title} 吗？</p>
                            <button onClick={handleDelete}>确认</button>
                            <button onClick={closeDeleteModal}>取消</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemList;

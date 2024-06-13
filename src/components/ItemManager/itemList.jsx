import React, {useState} from 'react';
import Modal from 'react-modal';
import "./styles.css";
import {Link} from "react-router-dom";
import {Pagination} from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../store/actions";

Modal.setAppElement('#root'); // 确保根元素设置正确

function ItemList(props) {

    const products = useSelector(state => state.items);
    const dispatch = useDispatch();

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

    const handleDelete = () => {
        dispatch(removeItem(productToDelete))
        // setProducts(products.filter(product => product.id !== productToDelete.id));
        closeDeleteModal();
    };

    const itemsPerPage = 5;  // 每页显示的商品数量
    const [currentPage, setCurrentPage] = useState(1);

    // 获取当前页的商品
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    // 改变页码
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                            {currentProducts.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.store}</td>
                                    <td>{item.updateTime}</td>
                                    <td>

                                        {/*<a title={"修改"}> */}
                                        {/*    <i className="fa fa-edit text-navy"></i>*/}
                                        {/*</a>*/}
                                        <Link to="/itemEdit" state={{...item}}> 修改 <i className="fa fa-edit text-navy"/></Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a onClick={()=>openDeleteModal(item)} title={"删除"}>
                                            <i className="fa fa-trash-o text-navy"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={products.length}
                            paginate={paginate}
                            currentPage={currentPage}
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

import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setItem} from "../../store/actions";

function ItemEdit(props) {

    const dispatch = useDispatch();
    // console.log("ItemEdit",props)
    // 父组件传进来的
    const {state} = useLocation()
    const [formData, setFormData] = useState(state);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // 更新父组件的商品列表，后端更新数据
        console.log(formData)
        dispatch(setItem(formData))
        //     setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
        e.preventDefault();
        navigate("/itemManager");
    };


    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>新增或修改商品</h5>
                            <div className="ibox-tools">
                                <a className="collapse-link">
                                    <i className="fa fa-chevron-up"></i>
                                </a>
                            </div>
                        </div>
                        <div className="ibox-content">
                            <form id="formTag" className="form-horizontal" onSubmit={handleSubmit}
                                  encType="multipart/form-data">
                                <div className="form-group"><label className="col-sm-2 control-label">商品id：</label>
                                    <div className="col-sm-10">
                                        <input id="id" name="id" readOnly="readonly" type="text"
                                               className="form-control" value={formData.id}
                                        onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="hr-line-dashed"></div>

                                <div className="form-group"><label className="col-sm-2 control-label">标题：</label>
                                    <div className="col-sm-10">
                                        <input id="title" name="title" type="text" className="form-control" value={formData.title}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group">
                                    <div className="col-sm-4 col-sm-offset-2">
                                        <button id="submitButton" className="btn btn-primary"
                                                type="submit">&nbsp;&nbsp;&nbsp;&nbsp;提&nbsp;&nbsp;&nbsp;&nbsp;交&nbsp;&nbsp;&nbsp;&nbsp;
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemEdit;

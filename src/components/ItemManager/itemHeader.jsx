import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function ItemHeader(props) {
    const categories = useSelector(state => state.categories);

    return (
        <div className="col-lg-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5>搜索&amp;操作</h5>
                    <div className="ibox-tools">
                        <a className="collapse-link">
                            <i className="fa fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
                <div className="ibox-content">
                    <form action="itemManage_0_0_0">
                        <div className="row">
                            <div className="col-sm-2 m-b-xs">
                                <input id="title" name="title" placeholder="商品标题" className="form-control"
                                       type="text"/>
                            </div>
                            <div className="col-sm-2 m-b-xs">
                                <select name="cid" id="cid" className="form-control">
                                    {
                                        categories.map(category => <option value={category}>{category}</option>)
                                    }
                                </select>
                            </div>

                            <div className="col-sm-2 m-b-xs">
                                <input id="minPrice" name="minPrice" className="form-control" type="text" placeholder="最低价格"/>
                            </div>
                            <div className="col-sm-2 m-b-xs">
                                <input id="maxPrice" name="maxPrice" className="form-control" type="text" placeholder="最高价格"/>
                            </div>
                            <div className="col-sm-2 m-b-xs">
                                <button className="btn btn-primary btn-block" type="submit"><i
                                    className="fa fa-search"></i>&nbsp;&nbsp;&nbsp;&nbsp;<strong>搜索</strong>
                                </button>
                            </div>
                            <div className="col-sm-2 m-b-xs">
                                <a href="../static'download1'}"
                                   className="btn btn-primary btn-block">&nbsp;&nbsp;&nbsp;&nbsp;
                                    <strong>导出</strong></a>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-sm-6 m-b-xs">
                            <Link to={"/itemEdit"} className="btn btn-primary btn-sm"><i
                                className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;新增商品&nbsp;&nbsp;&nbsp;&nbsp;
                            </Link>
                        </div>
                        <div className="col-sm-6 m-b-xs">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ItemHeader;

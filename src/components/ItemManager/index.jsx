import React from 'react';

function ItemManager(props) {
    return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
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
                                               type="text" value="${item.title}"/>
                                    </div>
                                    <div className="col-sm-2 m-b-xs">
                                        <select name="cid" id="cid" className="form-control">
                                            <option value="0" selected="${item.cid==0}">--请选择商品分类--</option>
                                            <option each="ic : ${itemCategoryList}" value="${ic.id}" text="${ic.name}"
                                                    selected="${ic.id==item.cid}">分类
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-sm-2 m-b-xs">
                                        <input id="minPrice" name="minPrice" className="form-control" type="text"
                                               value="${item.minPrice}" placeholder="最低价格"/>
                                    </div>
                                    <div className="col-sm-2 m-b-xs">
                                        <input id="maxPrice" name="maxPrice" className="form-control" type="text"
                                               value="${item.maxPrice}" placeholder="最高价格"/>
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
                                    <a href="../staticitemEdit}" className="btn btn-primary btn-sm"
                                       data-toggle="tooltip" data-placement="left" title=""
                                       data-original-title="Refresh inbox"><i
                                        className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;新增商品&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>
                                </div>
                                <div className="col-sm-6 m-b-xs">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
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
                                    <tr each="item : ${itemList}">
                                        <td text="${item.id}">Onions</td>
                                        <td text="${item.title}">Onions</td>
                                        <td text="${item.categoryName}">Onions</td>
                                        <td text="${item.price}">Onions</td>
                                        <td text="${item.num}">Onions</td>
                                        <td text="${item.updatedStr}">Onions</td>

                                        <td>
                                            <a href="../static'itemEdit?id='+${item.id}}" title="修改"><i
                                                className="fa fa-edit text-navy"></i></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" onClick="'javascript:updateState('+${item.id}+',2,0);'"
                                               title="删除"><i className="fa fa-trash-o text-navy"></i></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colSpan="8">
                                            <ul id="pageHTML" className="pagination pull-right"></ul>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemManager;

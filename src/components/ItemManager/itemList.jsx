import React, {useState} from 'react';

function ItemList(props) {

    const [state, setState] = useState([
        {'id':'001','title': '华为手机','category':'手机', 'price':6000.00,'store':4000,'updateTime':'2024-01-01'},
        {'id':'002','title': '苹果手机','category':'手机', 'price':8000.00,'store':4000,'updateTime':'2024-01-01'},
        {'id':'003','title': '小米手机','category':'手机', 'price':6000.00,'store':4000,'updateTime':'2024-01-01'},
    ])


    const updateItem = (item) => {
        console.log('Button clicked',item);
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
                            {state.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.store}</td>
                                    <td>{item.updateTime}</td>
                                    <td>
                                        <a onClick={()=>updateItem(item)} title="修改">
                                            <i className="fa fa-edit text-navy"></i>
                                        </a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" onClick={()=>updateItem(item)}
                                           title="删除"><i className="fa fa-trash-o text-navy"></i></a>
                                    </td>
                                </tr>
                            ))}

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
    );
}

export default ItemList;

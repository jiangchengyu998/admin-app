import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button} from "antd";

function ItemHeader(props) {
    const categories = useSelector(state => state.categories);

    const [searchForm, setSearchForm] = useState({
        'title':'',
        'category':'',
        'minPrice':'',
        'maxPrice':''
    })

    const handleChange = (e) => {
      const {name,value} = e.target;
      setSearchForm(prevState => ({
          ...prevState, [name]: value
      }))
    }

    const search = (e) => {
      console.log('search', searchForm)
    }

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
                    <form>
                        <div className="row">
                            <div className="col-sm-2 m-b-xs">
                                <input id="title" name="title" placeholder="商品标题" className="form-control"
                                       type="text" onChange={handleChange}/>
                            </div>
                            <div className="col-sm-2 m-b-xs">

                                <select name="category" id="cid" className="form-control" onChange={handleChange}>
                                    <option key={''} value="">
                                        Select an option
                                    </option>
                                    {
                                        categories.map(category => <option key={category}
                                                                           value={category}>{category}</option>)
                                    }
                                </select>
                            </div>

                            <div className="col-sm-2 m-b-xs">
                                <input id="minPrice" name="minPrice" className="form-control" type="text"
                                       placeholder="最低价格" onChange={handleChange}/>
                            </div>
                            <div className="col-sm-2 m-b-xs">
                                <input id="maxPrice" name="maxPrice" className="form-control" type="text"
                                       placeholder="最高价格" onChange={handleChange}/>
                            </div>
                            <div className="col-sm-2 m-b-xs">
                                <button className="btn btn-primary btn-block" type="button" onClick={search}><i
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

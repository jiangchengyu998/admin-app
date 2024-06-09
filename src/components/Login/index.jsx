import React from 'react';

export default function Login(props) {
    return (
        <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
                <h2 className="logo-name">YX</h2>
            </div>
            <h3>欢迎进入后台管理系统</h3>
            <form className="m-t" role="form" action="dashboard.html" method="get">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="输入账号" name="userName"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="输入密码" name="password"/>
                </div>
                <button type="submit" className="btn btn-primary block full-width m-b">登 录</button>
                <p className="text-muted text-center">
                    <a href="forget.html"><small>忘记密码 ?</small></a>
                </p>
                <a className="btn btn-sm btn-white btn-block" href="register.html">注 册</a>
            </form>
        </div>
    );
}


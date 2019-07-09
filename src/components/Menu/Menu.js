import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link> 
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container-fluid">
                        <a className="navbar-brand" >CALL API</a>
                        <ul className="nav navbar-nav">
                            {this.showMenus(menus)}
                            {/* <li className="active">
                                <a>Trang chủ</a>
                            </li>
                            <li>
                                <a>Quản Lý Sản Phẩm</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    showMenus=(menu)=>{
        var result=null;
        if(menus.length>0){
            result=menu.map((menu,index)=>{
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}



export default Menu;

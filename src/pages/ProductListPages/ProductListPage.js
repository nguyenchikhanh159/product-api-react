import React, { Component } from 'react';
import ProductsList from './../../components/ProductsList/ProductsList';
import ProductsItem from './../../components/ProductsItem/ProductsItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {actFectchProductsRequest} from './../../action/index';



class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        // callApi('product', 'GET', null).then(res => {
        //     // this.setState({
        //     //     products: res.data
        //     // });
        //     this.props.fetchAllProducts(res.data)
        // });
        this.props.fetchAllProducts();


    }
    onDelete = (id) => {
        callApi(`product/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                this.state.products.splice();
            }
            this.setState({
                products:this.state.products
            });
        });
    }

    render() {
        var { products } = this.state;
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mm-15">
                <Link to="/product/add" className="btn btn-large btn-block btn-info mb-10">
                    Thêm Sản Phẩm
                </Link>
                <ProductsList>
                    {this.showProducts(products)}
                </ProductsList>
            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductsItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        fetchAllProducts:()=>{
            dispatch(actFectchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);




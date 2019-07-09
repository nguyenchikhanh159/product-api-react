import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }
    componentDidMount(){
        var {match} =this.props;
        if(match){
            var id=match.params.id;
            callApi(`product/${id}`,'GET',null).then(res=>{
                var data=res.data;
                this.setState({
                    id:data.id,
                    txtName:data.name,
                    txtPrice:data.price,
                    chkbStatus:data.status
                });
            });
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        });
    }
    onSave=(event)=>{
        event.preventDefault();
        var {id,txtName,txtPrice,chkbStatus}=this.state;
        var {history}=this.props;
        if(id){
            callApi(`product/${id}`,'PUT',{
                name:txtName,
                price:txtPrice,
                status:chkbStatus
            }).then(res=>{
                history.goBack();
            });
            
        }else
        {callApi('product','POST',{
            name:txtName,
            price:txtPrice,
            status:chkbStatus
        }).then(res=>{
            history.goBack();
        });
    }
    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mm-15">
                <form onSubmit={this.onSave} >

                    <div className="form-group">
                        <label for="">Tên Sản Phẩm:</label>
                        <input type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}

                        />
                    </div>
                    <div className="form-group">
                        <label for="">Giá:</label>
                        <input type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}

                        />
                    </div>
                    <div className="form-group">
                        <label for="">Trạng Thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                value=""
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus} 
                            />
                            Còn hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">
                    Quay lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                  
                </form>
            </div>
        );
    }
}
export default ProductActionPage;
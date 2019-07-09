import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class ProductsItem extends Component {
  onDelete=(id)=>{
    if(confirm('Bạn có chắc chắn xóa?')){ //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    var {product,index}=this.props;
    var statusName=product.status ? 'Còn hàng':'Hết hàng';
    var statusClass=product.status ? 'warning' : 'default';
    return (
      <tr>
        <td>{index+1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span class={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <Link
          to={`/product/${product.id}/edit`}
          class="btn btn-success mr-10"
          >
            Sửa 
        </Link>
          <button type="button" class="btn btn-danger" onClick={()=>this.onDelete(product.id)}>
            Xóa
          </button>

        </td>
      </tr>
    );
  }
}

export default ProductsItem;

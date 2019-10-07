/**
 * Created by kanamars on 07/10/19.
 */
import React from 'react';
import {connect} from 'react-redux';
import {getProductsFromServer} from '../../store/Reducers/productReducer';
class Products extends React.Component{
    productDetailHandler = (event) =>{
      console.log("event", event.target.innerHTML);
      this.props.productDetailsToShow(event.target.innerHTML);
    };
    componentDidMount(){
        this.props.getProducts();
    }
    render() {
        return(
            <React.Fragment>
                PRODUCTS
                {this.props.products.map((product) => {
                    return (<div key={product.name} onClick={this.productDetailHandler}>{product.name}</div>)
                })}
                Product Detail: {this.props.productDetail}
            </React.Fragment>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        products: store.productDetail.products,
        productDetail: store.productDetail.productDetail
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        productDetailsToShow : (product)=> dispatch({type: 'PRODUCT-TO-SHOW', value: product}),
        getProducts : () => dispatch(getProductsFromServer())
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Products);
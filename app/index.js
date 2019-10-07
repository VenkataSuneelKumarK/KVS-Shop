/**
 * Created by kanamars on 04/10/19.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from './store/Reducers/reducer';
import productReducer from './store/Reducers/productReducer';


const store = createStore(combineReducers({
    keySearch: reducer,
    productDetail: productReducer
}), applyMiddleware(thunk));
class KVSShop extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <App></App>
            </Provider>
        );
    }
}

ReactDOM.render(<KVSShop/>, document.getElementById("kvs-shop"));
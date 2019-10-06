/**
 * Created by kanamars on 04/10/19.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

class KVSShop extends React.Component{
    render(){
        return (
            <React.Fragment>
                <App></App>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<KVSShop/>, document.getElementById("kvs-shop"));
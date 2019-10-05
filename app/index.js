/**
 * Created by kanamars on 04/10/19.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './containers/searchBox';
import App from './App';

class KVSShop extends React.Component{
    render(){
        return (
            <React.Fragment>
                <App></App>
                <SearchBox/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<KVSShop/>, document.getElementById("kvs-shop"));
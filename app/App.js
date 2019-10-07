/**
 * Created by kanamars on 05/10/19.
 */
import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import Products from './containers/Products/Products'

class App extends React.Component {
    componentWillMount(){
        console.log("App::componentWillMount");
    }
    componentDidMount(){
        console.log("App::componentDidMount");
    }
    componentWillUpdate(){
        console.log("App::componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("App::componentDidUpdate");
    }
    componentWillReceiveProps(){
        console.log("App::componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("App::shouldComponentUpdate");
        return true
    }
    render(){
        console.log("App:render");
        return (
            <React.Fragment>
                <Layout>
                    {/*<Button>hurray</Button>*/}
                    aa{this.props.keyStores}
                    <Products/>
                </Layout>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    "use strict";
    return{
        keyStores : store.keySearch.keyStrokes
    }
};
const mapDispatchToProps = (dispatch) => {
    "use strict";
    return{

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
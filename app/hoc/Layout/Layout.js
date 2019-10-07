/**
 * Created by kanamars on 05/10/19.
 */
import React from 'react';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import Footer from '../../components/Footer/Footer';
import  './Layout.css';

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                <ToolBar className="toolBar" heading="heading"/>
                {this.props.children}
                <Footer className="footer"></Footer>
            </React.Fragment>
        )
    }
}

export default Layout;
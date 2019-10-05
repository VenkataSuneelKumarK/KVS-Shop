/**
 * Created by kanamars on 05/10/19.
 */
import React from 'react';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import Footer from '../../components/Footer/Footer';

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                <ToolBar/>
                Main body
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default Layout;
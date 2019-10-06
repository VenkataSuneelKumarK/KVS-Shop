/**
 * Created by kanamars on 05/10/19.
 */
import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Layout/>
                <Button>hurray</Button>
            </React.Fragment>
        );
    }
}

export default App;
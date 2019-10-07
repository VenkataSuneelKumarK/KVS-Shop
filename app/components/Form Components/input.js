/**
 * Created by kanamars on 04/10/19.
 */
import React from 'react';

// const input = (props) => {
//     "use strict";
//     return (<input type={props.type}
//                    value={props.value}
//                    onChange={props.onChangeHandler}
//                    onKeyUp={props.keyUpHandler}
//                    className={props.className}
//             />);
// };




class Input extends React.Component{
    componentWillMount(){
        console.log("Input::componentWillMount");
    }
    componentDidMount(){
        console.log("Input::componentDidMount");
    }
    componentWillUpdate(){
        console.log("Input::componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("Input::componentDidUpdate");
    }
    componentWillReceiveProps(){
        console.log("Input::componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("Input::shouldComponentUpdate");
        return true
    }
    render(){
        console.log("Input::render");
        return(
            <div className={this.props.heading}>
                <input type={this.props.type}
                       value={this.props.value}
                       onChange={this.props.onChangeHandler}
                       onKeyUp={this.props.keyUpHandler}
                       className={this.props.className}
                />
                {this.props.children}
            </div>
        );
    }
}

export default Input;
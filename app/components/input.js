/**
 * Created by kanamars on 04/10/19.
 */
import React from 'react';

const input = (props) => {
    "use strict";
    return (<input type={props.type}
                   value={props.value}
                   onChange={props.onChangeHandler}
                   onKeyUp={props.keyUpHandler}/>);
};

export default input;
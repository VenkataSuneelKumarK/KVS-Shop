/**
 * Created by kanamars on 05/10/19.
 */
import React from 'react';
import SearchBox from '../../SearchBox/searchBox';
const toolBar = (props) => {
    "use strict";
    return (
      <React.Fragment >
          <p className={props.className}>
              <span>KVS</span><SearchBox/></p>

      </React.Fragment>
    );
};

export default toolBar;
/**
 * Created by kanamars on 05/10/19.
 */
import React from 'react';
import SearchBox from '../../SearchBox/searchBox';
const toolBar = (props) => {
    "use strict";
    return (
      <React.Fragment >
          <div className={props.className}>
              <div className={props.heading}>KVS</div>
              <SearchBox/>
          </div>

      </React.Fragment>
    );
};

export default toolBar;
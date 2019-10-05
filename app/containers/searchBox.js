/**
 * Created by kanamars on 04/10/19.
 */
import React from 'react';
import Input from '../components/input';

class SearchBox extends React.Component{
    state = {
        searchBoxValue : null,
        list:[1]
    };
    searchBoxHandler = (event) =>{
      this.setState({
          searchBoxValue: event.target.value
      }, this.getDataFromServer)
    };

    timeout = null;
    getDataFromServer = (event) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=> {
            this.state.list.push(Number(this.state.list[this.state.list.length-1]) + 1);
            this.setState({
                list: [...this.state.list]
            });
        }, 300);
    };

    render(){
        return(<div>
                <Input onChangeHandler = {this.searchBoxHandler}/>
                {this.state.list.map((val,i)=> <p key={val+i}>{val}</p>)}
                </div>
        )
    }
}

export default SearchBox;
/**
 * Created by kanamars on 04/10/19.
 */
import React from 'react';
import Input from '../Form Components/input';
import "./searchBox.css";
import {connect} from 'react-redux';
class SearchBox extends React.Component{
    state = {
        searchBoxValue : null,
        list:[
        {
            name: "Samsung",
            keywords: ["sam", "sams", "sasung", "samsung", "s", "sa"]
        },
        {
            name: "Nokia",
            keywords: ["nok", "noki", "nokia", "n", "o"]
        },
        {
            name: "Iphone",
            keywords: ["i", "ip", "iph", "ipho", "iphon", "iphone"]
        }
        ],
        displayList: []
    };
    searchBoxHandler = (event) =>{
        console.log("SearchBox::searchBoxHandler");
      this.setState({
          searchBoxValue: event.target.value
      }, this.getDataFromServer)
    };

    timeout = null;
    getDataFromServer = () => {
        clearTimeout(this.timeout);
        console.log("SearchBox::getDataFromServer");

        this.timeout = setTimeout(()=> {
            console.log("SearchBox::timeout");
            this.props.updateStore(this.state.searchBoxValue);
            this.setState({
                displayList: this.state.list.filter((item) =>{
                    return item.keywords.indexOf(this.state.searchBoxValue) > -1
                })
            });
        }, 300);
    };
    componentWillMount(){
        console.log("SearchBox::componentWillMount");
    }
    componentDidMount(){
        console.log("SearchBox::componentDidMount");
    }
    componentWillUpdate(){
        console.log("SearchBox::componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("SearchBox::componentDidUpdate");
    }
    componentWillReceiveProps(){
        console.log("SearchBox::componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("SearchBox::shouldComponentUpdate");
        return true
    }
    render(){
        console.log("SearchBox::render");
        let displayFilteredList = this.state.displayList.map((ele, i) => (
           <div key={ele.name + i}>{ele.name}</div>
        ));
        return(
            <React.Fragment>
                <Input onChangeHandler = {this.searchBoxHandler} className="searchBox" heading="inputSearchBox">

                    { displayFilteredList.length > 0 ? <div className="displayList">
                        {displayFilteredList}
                    </div> : <span></span>}
                </Input>
                {/*{this.state.list.map((val,i)=> <p key={val+i}>{val}</p>)}*/}
            </React.Fragment>
        )
    }
}
const mapStoreToProps = (store) =>{
    return{
        keyStrokes : store.keyStrokes
    }

};
const mapDispatchToProps = (dispatch) => {
    return{
        updateStore: (value) => dispatch({type:"UPDATEKEYSTROKES", value: value})
    }

};
export default connect(mapStoreToProps, mapDispatchToProps)(SearchBox);
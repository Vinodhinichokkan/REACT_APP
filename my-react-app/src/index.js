import React, {Component} from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {hello: "Topperworld"};
        this.changestate = this.changestate.bind(this)
    }
    render(){
        return(
            <div>
                <h1>ReactJS component lifecycle</h1>
                <h3>Hello{this.state.hello}</h3>
                <button sqonclick = {this.changestate}>Click here!</button>
            </div>   
            
        )
    }
    componentWillMount(){
        console.log('component will Mount!')
    }
    componentDidMount(){
        console.log('Component Did Mount!')
    }
    changestate(){
        this.setState({hello : "All!- Its a great reactjs tutorial."});
    }
    componentWillReceiveProps(newProps){
        console.log("Component will receive props!")
    }
    shouldComponentUpdate(newProps,newStae){
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component Did Update');
    }
    componentWillUpdate(nextProps,nextState){
        console.log('omponent will update')
    }
    componentWillUnmount(){
        console.log('component will unmount!')
    }
}

export default App;

import React from "react";
class Welcome extends React.componentDidMount{
    render(){
        return<h1>Hello </h1>
    }
}


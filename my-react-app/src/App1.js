import React from 'react';
class App1 extends React.Component{
    constructor(){
        super();
        this.forceUpdatestate = this.forceUpdatestate.bind(this);
    }
    forceUpdatestate(){
        this.forceUpdate();
    }
    render(){
        return(
            <div>
                <h1>example to generate random Number</h1>
                <h2>Random Number : {Math.random()}</h2>

                <button onClick={this.forceUpdatestate}>Generate New Random Number</button>
            </div>  

        )

    }
}

export default App1;


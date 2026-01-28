import React from "react";
class Welcome extends ReactComponent{
  render(){
    return<h1>Hello,{this.props.name}!</h1>
  }
}
export default Welcome;

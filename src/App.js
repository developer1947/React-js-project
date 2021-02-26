import React from "react";
var a=20

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      a:30
    }
  }
  
  render() {
    return(
     <div>
       Heyyyyy
       {a}
       {this.state.a}
       <input value="hello"/>
       </div>
    );
  
  
  }

}

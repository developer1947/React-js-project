import React from "react";


export default class Assignment1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num1:0,
      num2:0,
      num3:0,
      sum:0
      
    }
  }
  handlenum1= (e) =>{
      this.setState({
          num1: e.target.value
      })
  }
  handlenum2= (e) =>{
    this.setState({
        num2: e.target.value
    })
}
handlenum3= (e) =>{
    this.setState({
        num3: e.target.value
    })
}
handleSum= (e) =>{
    this.setState({
        sum: parseInt(this.state.num1) +parseInt (this.state.num2) +parseInt (this.state.num3)
    })
}
handleReset= () =>{
    this.setState({
      num1: 0,
      num2: 0,
      num3: 0,
      sum: 0
    })
}
  render() {
    return(
     <div>
        <input
         placeholder="enter a number" 
         value={this.state.num1}
         onChange={this.handlenum1}
         />
         <br/ >
         <input
         placeholder="enter a number" 
         value={this.state.num2}
         onChange={this.handlenum2}
         />
         <br/>
          <input
         placeholder="enter a number" 
         value={this.state.num3}
         onChange={this.handlenum3}
         />
         <br/>

         
         <button
          onClick={this.handleSum}
         
         >
             Add
         </button>
         <button
          onClick={this.handleReset}
         >
             Reset
         </button>
         <br/>
        The Sum is: {this.state.sum}
         
     </div>
    )
  }
}

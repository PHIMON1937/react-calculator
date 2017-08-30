import React from 'react';

class Calculator extends React.Component{
	constructor(){
		super();
    this.state = {
    	num1:"",num2:""};
	}
  
	
  setNum1(e){
  const num1 = e.target.value;
  this.setState({num1 : num1});
 }
 setNum2(e){
  const num2 = e.target.value;
  this.setState({num2 : num2});
 }
	render(){
		return(
			<div>
			
				<h1> Test Calculator </h1>	
        
        
        <input onChange={this.setNum1.bind(this)}/>
        <input onChange={this.setNum2.bind(this)}/>
		
			<div>
			input1 : {this.state.num1}
			</div>
			<div>
			input2 : {this.state.num2}
			</div>
			
			Result : {this.state.num1+this.state.num2}
			</div>
			
		);
	}
}



export default Calculator;
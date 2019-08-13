import React from 'react';
import './App.css';

export default class Traffic extends React.Component {
  constructor(props){
    super(props);
    this.state={
      light: null
    };
 
  };
 
  render(){
    console.log(this.state);
   //const style=boxShadow: "1px 3px 1px #9E9E9E"
   let changeLightRed = '';
   let changeLightYellow = '';
   let changeLightGreen = '';

   if(this.state.light === 'red')changeLightRed = 'shadow'
  if(this.state.light === 'yellow')changeLightYellow = 'shadow'
  if(this.state.light === 'green')changeLightGreen = 'shadow'
  
  
     
  return <div id='boxDad'>
    <div id='soport'> </div>
    <div id='box'>
     <div className={'red '+changeLightRed} onClick={ ()=> this.setState({light: 'red'})}> </div>
     <div className={'yellow '+changeLightYellow}  onClick={ ()=> this.setState({light: 'yellow'})}> </div>
     <div className={'green '+changeLightGreen}  onClick={ ()=> this.setState({light: 'green'})}> </div>
    </div>
  </div>

  } 
}



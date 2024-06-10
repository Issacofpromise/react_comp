import React, {Component} from 'react';
class To extends Component {render (){console.log('Header render');
return (<header>
  <h1><a href="/" onClick={(p)=>{p.preventDefault();
  this.props.ch()}}>{this.props.name}</a></h1>{this.props.tx}</header>)}}  
  export default To;

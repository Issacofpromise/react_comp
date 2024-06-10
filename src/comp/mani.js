import React, {Component} from 'react';
class Mani extends Component {render (){console.log('Mani render');
return (   <ul>
  <li><a href='/create' onClick={function (p){p.preventDefault();
  this.props.ch('cre')}.bind(this)}>create</a></li>
  <li><a href='/update'onClick={function (p){p.preventDefault();
  this.props.ch('upd')}.bind(this)}>update</a></li>
  <li><input type='button' value='delete'onClick={function (p){p.preventDefault();
  this.props.ch('del')}.bind(this)}></input></li>
 </ul> )}}  
  export default Mani

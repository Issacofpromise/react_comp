import React, {Component} from 'react';
class CreaFoot extends Component {render (){ console.log('CreaFoot render');    
    return ( <article><h2>Creat</h2><form action="/crea_pro" method="post"
    onSubmit={(e)=>{ e.preventDefault();
    this.props.onSubmit(e.target[0].value, e.target.dsc.value);
   }}><input name="ti" ></input><p><textarea name="dsc"></textarea></p>
   <input type="submit"></input></form></article>)}}
export default CreaFoot;
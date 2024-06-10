import React, {Component} from 'react';
class Updt extends Component {render (){ console.log('Updt render');
    return ( <article><h2>Update</h2><form action="/crea_pro" method="post"
    onSubmit={(e)=>{ e.preventDefault();
    this.props.onSubmit(e.target[0].value, e.target.desc.value);
   }}><input name="title" defaultValue={this.props.val.title} ></input>
   <p><textarea name="desc" defaultValue={this.props.val.desc}></textarea></p>
   <input type="submit"></input></form></article>)}}
export default Updt;
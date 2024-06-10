import React, {Component} from 'react';
class Navy extends Component { shouldComponentUpdate(newProp,state){
  console.log('==>List render shouldComponentUpdate',
  newProp.data,this.props.data);
  if(newProp.data==this.props.data){ return false} return true}
  render (){ console.log('==>List render');
  let lists = []; let dat = this.props.data;
    for(let i=0; i < dat.length; i++){lists.push(<li key={dat[i].id}>
        <a href={"/content/"+dat[i].id} onClick={(p)=>{p.preventDefault();
          this.props.ch(dat[i].id)}}>{dat[i].title}</a></li>);
    } return ( <ol>{lists}</ol>)}}
export default Navy;

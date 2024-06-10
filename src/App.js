import React, {Component} from 'react'; // 출처 생활코딩 : https://youtu.be/kviidk347nU
import Fly from './comp/Hd';
import Navy from './comp/Navy';
import './App.css';
import Cth from './comp/Foot';
import Crea from './comp/creaFoot';
import Upd from './comp/upd';
import Mani from './comp/mani';
class App extends Component { constructor(props) { super(props);
  this.max_id = 3; this.state = { mode:'welcome',selted:1,
   info:{title:'WEB', sub:'World Wid Web!'},
   welcome:{title:'Welcome', desc:'Hello, React!!'},
    cts:[{id:1, title:'HTML', desc:'HTML is for information'},
    {id:2, title:'CSS', desc:'CSS is for design'},
    {id:3, title:'JavaS', desc:'JavaS is for interactive'}]}}
get_read_atc(){ 
  for(let i=0; i < this.state.cts.length; i++){
    if(this.state.cts[i].id===this.state.selted){
     return this.state.cts[i]; break}}
    }
   get_atc(){
      let _title, _desc, _article = null;
      if(this.state.mode ===  'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <Cth title={_title} desc={_desc}></Cth>
      } else if(this.state.mode === 'read'){
_article = <Cth title={this.get_read_atc().title} 
desc={this.get_read_atc().desc}></Cth>
    } else  if(this.state.mode === 'cre'){
  _article = <Crea onSubmit={(_title, _desc)=>{this.max_id+=1;
   let _cts=Array.from(this.state.cts);
   _cts.push({id:this.max_id, title:_title, desc:_desc})
    this.setState({cts:_cts,selted:this.max_id,mode:'read'})}}></Crea>
    } else  if(this.state.mode === 'upd'){ 
  let _cts=[...this.state.cts]; for(let i=0; i < _cts.length; i++){
 if(_cts[i].id===this.state.selted){  _article = <Upd val={this.get_read_atc()}
 onSubmit={(_title, _desc)=>{_cts[i]={id:_cts[i].id, title:_title,
 desc:_desc}; this.setState({cts:_cts, mode:'read'})}}></Upd>
 break} _article ='Please select to updata an article.'}
} else  if(this.state.mode === 'del'){    
  let _cts=[...this.state.cts]; for(let i=0; i < _cts.length; i++){
if(_cts[i].id===this.state.selted){ 
  if(window.confirm("Are you sure you want to delete this?")){ _cts.splice(i,1)    
this.setState({cts:_cts, mode:'welcome'});alert('deleted~!');break} 
{this.setState({mode:'read'})}}
_article ='Please select to delete an article.'
 }} console.log(this.state.mode)
    return _article }
  render (){
    return ( <div className="App">  
  <Fly name={this.state.info.title} tx={this.state.info.sub}
ch={()=>{this.setState({mode:'welcome'})}}></Fly> 
   <Navy ch={(id)=>{this.setState({mode:'read',selted:id})}} 
   data={this.state.cts}></Navy>
<Mani ch={(_)=>{this.setState({mode:_})}}></Mani>
{this.get_atc()}
   </div>)}}
export default App;

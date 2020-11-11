import React from "react";
import { message } from 'antd';
import {createBrowserHistory} from 'history';
import Layout1 from './layout/Layout1'


class Form extends React.Component {  
  
  browserHistory = createBrowserHistory();

  constructor(props) {
    super(props);
    this.state = { yearsofexperience: '', yearsatcompany: '', title: '', location: '', gender: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value.trim() });
 }
  
  serialize(obj){
      return Object.keys(obj)
      .map(key => `${key}=${encodeURIComponent(obj[key])}`).join('&')
  }

  // TODO: Only allow redirect if collection exists
  handleSubmit(event) {
      console.log(this.state);
    const success = () => {
      message.success({
        content: 'Filled in form'
      });
    };
    success();
    console.log("LOL");
    this.browserHistory.push({'pathname':'/predict', 
    'yearsofexperience': this.state.yearsofexperience,
    'yearsatcompany': this.state.yearsatcompany,
    'title': this.state.title,
    'location': this.state.location,
    'gender': this.state.gender});
     window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Years of experience</span>
          <div><input style={{borderRadius: 5}} type="text" name='yearsofexperience' value={this.state.yearsofexperience} onChange={this.handleChange} /></div>
          </label>
          <label>
          <span>Years at company</span>
          <div><input style={{borderRadius: 5}} type="text" name='yearsatcompany' value={this.state.yearsatcompany} onChange={this.handleChange} /></div>
          </label>
          <label>
          <span>Title</span>
          <div><input style={{borderRadius: 5}} type="text" name='title' value={this.state.title} onChange={this.handleChange} /></div>
          </label>
          <label>
          <span>Location</span>
          <div><input style={{borderRadius: 5}} type="text" name='location' value={this.state.location} onChange={this.handleChange} /></div>
          </label>
          <label>
          <span>Gender</span>
          <div><input style={{borderRadius: 5}} type="text" name='gender' value={this.state.gender} onChange={this.handleChange} /></div>
          </label>
        <input type="submit" value="Submit" style={{backgroundColor: "#00134d", color: "#ffffff", marginTop: 10}}/>
      </form>
    );
  }
}

export default Form;

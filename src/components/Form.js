import React from "react";
import { message } from 'antd';
import { createBrowserHistory } from 'history';
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
    this.setState({ [e.target.name]: e.target.value.trim() });
  }

  serialize(obj) {
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
    this.browserHistory.push({
      'pathname': '/predict',
      'yearsofexperience': this.state.yearsofexperience,
      'yearsatcompany': this.state.yearsatcompany,
      'title': this.state.title,
      'location': this.state.location,
      'gender': this.state.gender
    });
    window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span style={{fontSize: 16}}>Years of experience</span>
          <div style={{ marginBottom: 20}}><input style={{ width: '300px', borderRadius: 5 }} type="text" name='yearsofexperience' value={this.state.yearsofexperience} onChange={this.handleChange} /></div>
        </label>
        <label>
          <span style={{fontSize: 16}}>Years at company</span>
          <div style={{ marginBottom: 20}}><input style={{ width: '300px', borderRadius: 5}} type="text" name='yearsatcompany' value={this.state.yearsatcompany} onChange={this.handleChange} /></div>
        </label>
        <label>
          <span style={{fontSize: 16}}>Title</span>
          <div style={{ marginBottom: 20}}><select style={{ width: '300px', borderRadius: 5, borderWidth: 2 }} type="select" name='title' value={this.state.title} onChange={this.handleChange}>
            <option value="Data_Scientist">Data Scientist</option>
            <option value="Hardware_Engineer">Hardware Engineer</option>
            <option value="Management_Consultant">Management Consultant</option>
            <option value="Marketing">Marketing</option>
            <option value="Product_Designer">Product Designer</option>
            <option value="Product_Manager">Product Manager</option>
            <option value="Software_Engineer">Software Engineer</option>
            <option value="Software_Engineering_Manager">Software Engineering Manager</option>
            <option value="Solution_Architect">Solution Architect</option>
            <option value="Technical_Program_Manager">Technical Program Manager</option>
          </select>
          </div>
        </label>
        <label>
          <span style={{fontSize: 16}}>Location</span>
          <div style={{ marginBottom: 20}}><select style={{ width: '300px', borderRadius: 5, borderWidth: 2 }} type="option" name='location' value={this.state.location} onChange={this.handleChange}>
            <option value="Arlington,VA">Arlington,VA</option>
            <option value="Atlanta,GA">Atlanta,GA</option>
            <option value="Austin,TX">Austin,TX</option>
            <option value="Bangalore,KA,India">Bangalore,KA,India</option>
            <option value="Bellevue,WA">Bellevue,WA</option>
            <option value="Bengaluru,KA,India">Bengaluru,KA,India</option>
            <option value="Berlin,BE,Germany">Berlin,BE,Germany</option>
            <option value="Boston,MA">Boston,MA</option>
            <option value="Boulder,CO">Boulder,CO</option>
            <option value="Cambridge,MA">Cambridge,MA</option>
            <option value="Chicago,IL">Chicago,IL</option>
            <option value="Cupertino,CA">Cupertino,CA</option>
            <option value="Dallas,TX">Dallas,TX</option>
            <option value="Denver,CO">Denver,CO</option>
            <option value="Dublin,DN,Ireland">Dublin,DN,Ireland</option>
            <option value="Herndon,VA">Herndon,VA</option>
            <option value="Hillsboro,OR">Hillsboro,OR</option>
            <option value="Houston,TX">Houston,TX</option>
            <option value="Hyderabad,TS,India">Hyderabad,TS,India</option>
            <option value="Irvine,CA">Irvine,CA</option>
            <option value="Jersey City,NJ">Jersey City,NJ</option>
            <option value="Kirkland,WA">Kirkland,WA</option>
            <option value="London,EN,United Kingdom">London,EN,United Kingdom</option>
            <option value="Los Angeles,CA">Los Angeles,CA</option>
            <option value="Los Gatos,CA">Los Gatos,CA</option>
            <option value="Menlo Park,CA">Menlo Park,CA</option>
            <option value="Minneapolis,MN">Minneapolis,MN</option>
            <option value="Moscow,MC,Russia">Moscow,MC,Russia</option>
            <option value="Mountain View,CA">Mountain View,CA</option>
            <option value="New York,NY">New York,NY</option>
            <option value="Palo Alto,CA">Palo Alto,CA</option>
            <option value="Philadelphia,PA">Philadelphia,PA</option>
            <option value="Phoenix,AZ">Phoenix,AZ</option>
            <option value="Pittsburgh,PA">Pittsburgh,PA</option>
            <option value="Plano,TX">Plano,TX</option>
            <option value="Pleasanton,CA">Pleasanton,CA</option>
            <option value="Portland,OR">Portland,OR</option>
            <option value="Raleigh,NC">Raleigh,NC</option>
            <option value="Redmond,WA">Redmond,WA</option>
            <option value="Redwood City,CA">Redwood City,CA</option>
            <option value="San Bruno,CA">San Bruno,CA</option>
            <option value="San Diego,CA">San Diego,CA</option>
            <option value="San Francisco,CA">San Francisco,CA</option>
            <option value="San Jose,CA">San Jose,CA</option>
            <option value="Santa Clara,CA">Santa Clara,CA</option>
            <option value="Seattle,WA">Seattle,WA</option>
            <option value="Singapore,SG,Singapore">Singapore,SG,Singapore</option>
            <option value="Sunnyvale,CA">Sunnyvale,CA</option>
            <option value="Sydney,NS,Australia">Sydney,NS,Australia</option>
            <option value="Tel Aviv,TA,Israel">Tel Aviv,TA,Israel</option>
            <option value="Toronto,ON,Canada">Toronto,ON,Canada</option>
            <option value="Vancouver,BC,Canada">Vancouver,BC,Canada</option>
            <option value="Washington,DC">Washington,DC</option>
            <option value="Zurich,ZH,Switzerland">Zurich,ZH,Switzerland</option>
          </select>
          </div>
        </label>
        <label>
          <span style={{fontSize: 16}}>Gender</span>
          <div style={{ marginBottom: 20}}><select style={{ width: '300px', borderRadius: 5, borderWidth: 2}} type="option" name='gender' value={this.state.gender} onChange={this.handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          </div>
        </label>
        <input type="submit" value="Predict" style={{ backgroundColor: "#00134d", color: "#ffffff", width: 100, height: 40 }} />
      </form>
    );
  }
}

export default Form;

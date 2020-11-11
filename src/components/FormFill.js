import React, { useState } from 'react';
import { Form, InputNumber, Select, Button, Statistic } from 'antd';
import './FormFill.css';

const { Option } = Select;

function FormFill() {
  const [salary, setSalary] = useState();

  const onFinish = values => {
    console.log(values);

    fetch(`/${values.yearsofexperience}/${values.location}/${values.title}`)
      .then(res => res.json()).then(data => {
        console.log(data);
        setSalary(Math.round(data));
      });
  };

  return (
    <>
      <div className='logo' style={{ marginRight: '100px' }}>
        <h1 style={{ color: 'rgb(26, 224, 125)', fontSize: '64px' }}>Salary.io</h1>
        <h3>Get a salary estimate in seconds</h3>
      </div>
      <Form
        name="basic"
        onFinish={onFinish}
        style={{ marginRight: '100px' }}
        initialValues={{ title: 'Software_Engineer', location: 'SanFrancisco,CA', yearsofexperience: 2 }}
      >
        <Form.Item name="title" label="Position">
          <Select>
            <Option value="Data_Scientist">Data Scientist</Option>
            <Option value="Hardware_Engineer">Hardware Engineer</Option>
            <Option value="Management_Consultant">Management Consultant</Option>
            <Option value="Marketing">Marketing</Option>
            <Option value="Product_Designer">Product Designer</Option>
            <Option value="Product_Manager">Product Manager</Option>
            <Option value="Software_Engineer">Software Engineer</Option>
            <Option value="Software_Engineering_Manager">Software Engineering Manager</Option>
            <Option value="Solution_Architect">Solution Architect</Option>
            <Option value="Technical_Program_Manager">Technical Program Manager</Option>
          </Select>
        </Form.Item>

        <Form.Item name="location" label="Location">
          <Select>
            <Option value="Arlington,VA">Arlington, VA</Option>
            <Option value="Atlanta,GA">Atlanta, GA</Option>
            <Option value="Austin,TX">Austin, TX</Option>
            <Option value="Bangalore,KA,India">Bangalore, India</Option>
            <Option value="Bellevue,WA">Bellevue, WA</Option>
            <Option value="Bengaluru,KA,India">Bengaluru, India</Option>
            <Option value="Berlin,BE,Germany">Berlin, Germany</Option>
            <Option value="Boston,MA">Boston, MA</Option>
            <Option value="Boulder,CO">Boulder, CO</Option>
            <Option value="Cambridge,MA">Cambridge, MA</Option>
            <Option value="Chicago,IL">Chicago, IL</Option>
            <Option value="Cupertino,CA">Cupertino, CA</Option>
            <Option value="Dallas,TX">Dallas, TX</Option>
            <Option value="Denver,CO">Denver, CO</Option>
            <Option value="Dublin,DN,Ireland">Dublin, Ireland</Option>
            <Option value="Herndon,VA">Herndon, VA</Option>
            <Option value="Hillsboro,OR">Hillsboro, OR</Option>
            <Option value="Houston,TX">Houston, TX</Option>
            <Option value="Hyderabad,TS,India">Hyderabad, India</Option>
            <Option value="Irvine,CA">Irvine, CA</Option>
            <Option value="Jersey City,NJ">Jersey City, NJ</Option>
            <Option value="Kirkland,WA">Kirkland, WA</Option>
            <Option value="London,EN,United Kingdom">London, United Kingdom</Option>
            <Option value="LosAngeles,CA">Los Angeles, CA</Option>
            <Option value="LosGatos,CA">Los Gatos, CA</Option>
            <Option value="MenloPark,CA">Menlo Park, CA</Option>
            <Option value="Minneapolis,MN">Minneapolis, MN</Option>
            <Option value="Moscow,MC,Russia">Moscow, Russia</Option>
            <Option value="MountainView,CA">Mountain View, CA</Option>
            <Option value="NewYork,NY">New York, NY</Option>
            <Option value="PaloAlto,CA">Palo Alto, CA</Option>
            <Option value="Philadelphia,PA">Philadelphia, PA</Option>
            <Option value="Phoenix,AZ">Phoenix, AZ</Option>
            <Option value="Pittsburgh,PA">Pittsburgh, PA</Option>
            <Option value="Plano,TX">Plano, TX</Option>
            <Option value="Pleasanton,CA">Pleasanton, CA</Option>
            <Option value="Portland,OR">Portland, OR</Option>
            <Option value="Raleigh,NC">Raleigh, NC</Option>
            <Option value="Redmond,WA">Redmond, WA</Option>
            <Option value="RedwoodCity,CA">Redwood City, CA</Option>
            <Option value="SanBruno,CA">San Bruno, CA</Option>
            <Option value="SanDiego,CA">San Diego, CA</Option>
            <Option value="SanFrancisco,CA">San Francisco, CA</Option>
            <Option value="SanJose,CA">San Jose, CA</Option>
            <Option value="SantaClara,CA">Santa Clara, CA</Option>
            <Option value="Seattle,WA">Seattle, WA</Option>
            <Option value="Singapore,SG,Singapore">Singapore, Singapore</Option>
            <Option value="Sunnyvale,CA">Sunnyvale, CA</Option>
            <Option value="Sydney,NS,Australia">Sydney, Australia</Option>
            <Option value="TelAviv,TA,Israel">Tel Aviv, Israel</Option>
            <Option value="Toronto,ON,Canada">Toronto, Canada</Option>
            <Option value="Vancouver,BC,Canada">Vancouver, Canada</Option>
            <Option value="Washington,DC">Washington, DC</Option>
            <Option value="Zurich,ZH,Switzerland">Zurich, Switzerland</Option>
          </Select>
        </Form.Item>

        <Form.Item name="yearsofexperience" label="Years of Experience" >
          <InputNumber min={0} max={50} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ background: "#19e07d", borderColor: "#19e07d" }}>
            Predict Salary
        </Button>
        </Form.Item>
      </Form>
      <h1>We ran the numbers. <br />You could be making {salary ? '$' + salary + 'K' : ' _____ '} a year.</h1>
    </>
  );
}

export default FormFill;
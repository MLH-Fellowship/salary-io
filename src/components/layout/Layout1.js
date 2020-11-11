import React, {useEffect, useState} from 'react';
import './Layout1.css';
import ChartSalary from '../charts/ChartSalary'
import Form from '../Form';
import {withRouter} from 'react-router-dom';

// Ant Design 
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LineChartOutlined,
  FileTextOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';


// Ant Design Constants
const { Header, Sider, Content } = Layout;

class Layout1 extends React.Component {

  constructor(props){
    super(props);
    const queryString = require('query-string');
    this.state = queryString.parse(props.location.search);
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      clicked: false,
      salary: 0,
    });
  };

  componentDidMount() {
    // Show the result of the estimate from the model
    fetch(`/${this.state.yearsofexperience}/${this.state.yearsatcompany}/${this.state.location}/${this.state.title}/${this.state.gender}`)
    .then(res => res.json()).then(data => {
      console.log(data);
      this.setState({salary: data})
        });
    
  }
  handleClick() {
    this.setState({clicked: true});
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<LineChartOutlined />}>
              Salary
            </Menu.Item>
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              Jobs (Coming Soon!)
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreOutlined />}>
              Resources (Coming Soon!)
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
            >
            {/* Insert Graph Here */}
            {/* <p>An example of salary prediction call {this.state.salary}.</p> */}
            {/* <ChartSalary /> */}
            <h2>According to our estimate, you could earn {this.state.salary}k/year!</h2>
            <Button style={{ backgroundColor: "#00134d", color: "#ffffff", borderRadius: 10}} onClick={this.handleClick.bind(this)}>See where you stand in the bigger picture</Button>
            <div style={{marginTop: 50}}>{this.state.clicked && <ChartSalary />}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Layout1);
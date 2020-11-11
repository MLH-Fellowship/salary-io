import React, {useEffect, useState} from 'react';
import './Layout1.css';
import ChartSalary from '../charts/ChartSalary'
import SalaryForm from '../forms/FormCalculator'

// Ant Design 
import { Layout, Menu } from 'antd';
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
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      salary: 0,
    });
  };

  componentDidMount() {
    // This is an example of what the url would look like
    // I replace space as underscore for title
    fetch('/12/10/Seattle,WA/Product_Designer/Female').then(res => res.json()).then(data => {
      this.setState({salary: data})
        });
    
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
              Jobs
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreOutlined />}>
              Resources
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
            <div className="wrapper">
              <SalaryForm className="salaryForm wrap-child"/>
              <ChartSalary className="chartSalary wrap-child"/>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Layout1;
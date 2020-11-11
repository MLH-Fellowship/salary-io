import React from 'react';
import {
  Form,
  Button,
  Select
} from 'antd';

const SalaryForm = () => {

  return (
    <>
      <Form
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 10,
        }}
      >
        <Form.Item label="Title">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Years of Experience">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Location">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SalaryForm;
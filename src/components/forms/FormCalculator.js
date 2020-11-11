import React from 'react';
import {
  Form,
  Button,
  Select
} from 'antd';

const SalaryForm = () => {
  const initialValues = {

  }

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
        <Form.Item label="Years at Company">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Location">
          <Select>
            <Select.Option value="Location_1">Location_1</Select.Option>
            <Select.Option value="Location_2">Location_2</Select.Option>
            <Select.Option value="Location_3">Location_3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Gender">
          <Select>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
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
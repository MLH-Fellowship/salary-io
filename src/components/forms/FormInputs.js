import React from 'react';
import { Form, Select } from "antd";
import "./FormCalculator.css"
const { Option } = Select;

export const SelectField = (defaultValue, values) => {
    return (
        <>
        <Select defaultValue={defaultValue} style={{width: 120}}>
            {values.map((value, index) => {
                return (
                    <Option value={value} key={index}>
                        {value}
                    </Option>
                );
            })}
        </Select>
        </> 
    );
};
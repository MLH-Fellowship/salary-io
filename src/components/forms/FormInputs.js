import React from 'react';
import { Select } from "antd";
import "./FormCalculator.css"
const { Option } = Select;

export const SelectField = (defaultValue, values) => {
    return (
        <Select defaultValue={defaultValue} style={{ width: 200 }}>
            {values.map((value, index) => {
                return (
                    <Option value={value} key={index}>
                        {value}
                    </Option>
                );
            })}
        </Select>
    );
};
import React from 'react';
import { useForm, Controller } from 'react-hook-form'
import { SelectField } from "./FormInputs"
import { Button } from 'antd';

function SalaryForm(props) {
  const { handleSubmit, control } = useForm();
  const title = ["Data_Scientist", "Hardware_Engineer", "Management_Consultant", "Marketing", "Product_Designer", "Product_Manager", "Software_Engineer", "Software_Engineering_Manager", "Solution_Architect", "Technical_Program_Manager"];
  const yearsOfExperience = ["0-2 years", "2-4 years", "4-6 years", "6-10 years", "10+ years"];
  const yearsAtCompany = ["0-2 years", "2-4 years", "4-6 years", "6-10 years", "10+ years"];
  const location = ["Arlington,VA", "Atlanta,GA", "Austin,TX", "Bangalore,KA,India", "Bellevue,WA", "Bengaluru,KA,India", "Berlin,BE,Germany", "Boston,MA", "Boulder,CO", "Cambridge,MA", "Chicago,IL", "Cupertino,CA", "Dallas,TX", "Denver,CO", "Dublin,DN,Ireland", "Herndon,VA", "Hillsboro,OR", "Houston,TX", "Hyderabad,TS,India", "Irvine,CA", "Jersey City,NJ", "Kirkland,WA", "London,EN,United Kingdom", "Los Angeles,CA", "Los Gatos,CA", "Menlo Park,CA", "Minneapolis,MN", "Moscow,MC,Russia", "Mountain View,CA", "New York,NY", "Palo Alto,CA", "Philadelphia,PA", "Phoenix,AZ", "Pittsburgh,PA", "Plano,TX", "Pleasanton,CA", "Portland,OR", "Raleigh,NC", "Redmond,WA", "Redwood City,CA", "San Bruno,CA", "San Diego,CA", "San Francisco,CA", "San Jose,CA", "Santa Clara,CA", "Seattle,WA", "Singapore,SG,Singapore", "Sunnyvale,CA", "Sydney,NS,Australia", "Tel Aviv,TA,Israel", "Toronto,ON,Canada", "Vancouver,BC,Canada", "Washington,DC", "Zurich,ZH,Switzerland"];
  const gender = ["Male", "Other"];


  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-group'>
        <label className="label">Title: </label>
        <Controller
          as={SelectField(title[0], title)}
          name="title"
          control={control}
          defaultValue=''
        />
      </div>
      <div className='input-group'>
        <label className="label">Years of Experience: </label>
        <Controller
          as={SelectField(yearsOfExperience[0], yearsOfExperience)}
          name="yearsOfExperience"
          control={control}
          defaultValue=''
        />
      </div>
      <div className='input-group'>
        <label className="label">Years At Company: </label>
        <Controller
          as={SelectField(yearsAtCompany[0], yearsAtCompany)}
          name="yearsAtCompany"
          control={control}
          defaultValue=''
        />
      </div>
      <div className='input-group'>
        <label className="label">Location: </label>
        <Controller
          as={SelectField(location[0], location)}
          name="location"
          control={control}
          defaultValue=''
        />
      </div>
      <div className='input-group'>
        <label className="label">Gender: </label>
        <Controller
          as={SelectField(true, gender)}
          name="gender"
          control={control}
          defaultValue=''
        />
      </div>
      <Button type='primary' htmlType="submit">
        Calculate
      </Button>
    </form>
  );
}

export default SalaryForm
// export const SelectField = (defaultValue, values) => {}

// const SalaryForm = () => {
//   const initialValues = {

//   }

//   return (
//     <>
//       <Form
//         labelCol={{
//           span: 15,
//         }}
//         wrapperCol={{
//           span: 10,
//         }}
//       >
//         <Form.Item label="Title">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Years of Experience">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Years at Company">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Location">
//           <Select>
//             <Select.Option value="Location_1">Location_1</Select.Option>
//             <Select.Option value="Location_2">Location_2</Select.Option>
//             <Select.Option value="Location_3">Location_3</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Gender">
//           <Select>
//             <Select.Option value="Male">Male</Select.Option>
//             <Select.Option value="Female">Female</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Button">
//           <Button>Button</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
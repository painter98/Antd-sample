import React from 'react';
import { Select } from 'antd';


const Dropdown = ({setSelect,select}) =>{
    const onChange = (key,label) => {
        //console.log(label.label,key);
        setSelect(label.label)
      };

    const onSearch = (value) => {
      console.log('search:', value);
    };
      
return (
  <>
    <h1 className='heading'>Select Mode</h1>
    <Select
        showSearch
        placeholder="Select an option"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        value={select}

        options={[
        {
            value: 'dark',
            label: 'Dark Mode',
        },
        {
            value: 'light',
            label: 'Light Mode',
        },
        {
            value: 'funny',
            label: 'Funny Mode',
        },
        ]}
    />
  </>
)};
export default Dropdown;
import React from 'react'
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

function Datepicker({setDate,dates}) {
    const dateFormat = 'YYYY/MM/DD';
    function onChange(date, dateString) {
        console.log(date,dateString);
        setDate(dateString)
    }

    console.log('dates',dates);
  return (
    <div className='datepicker'>
        <h1 className='heading'>Date-Picker</h1>
        <DatePicker
         onChange={onChange}
         defaultValue={dates==''?null:dayjs(dates, dateFormat)}
        />
    </div>
  )
}

export default Datepicker

import './App.css';
import Dropdown from './components/dropdown';
import Datepicker from './components/datepicker';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import { setDate,setDrop } from './redux/slice/dataSlice';

function App() {
  let {date,drop} = useSelector(state=>state.data);

  console.log('in app',date);
  const [dates,setDates] = useState(date);
  const [select,setSelect] = useState(drop);
  let dispatch = useDispatch();

  let handleDate = ()=>{
    console.log('date here',dates);
    console.log('select here',select);

    dispatch(setDate(dates));
    dispatch(setDrop(select))
  }

  return (
    <div className="App">
      <div>
        <NavLink to='/' className='links'> Datepicker </NavLink>
        <NavLink to='drop' className='links'> Dropdown </NavLink>
      </div>
      <Routes element={<Homepage/>}>
        <Route path='/' element={<Datepicker setDate={setDates} dates={dates}/>}/>
        <Route path='/drop' element={<Dropdown setSelect={setSelect} select={select}/>}/>
      </Routes>
      <br/>
      <button onClick={handleDate} className='btn'>Submit</button>
    </div>
  );
}

export default App;

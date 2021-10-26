import React from 'react'
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { incNumber,decNumber } from './action/index';

const App = () => {

  const myState = useSelector((state) =>state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <>
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div className="">
        <button className="btn btn-primary" title="Decrement" onClick={() => dispatch(decNumber())}><span> - </span></button>
        <input className="" type="text" name="" value={myState} style={{textAlign:"center"}}></input>
        <button className="btn btn-primary" title="Increment" onClick={() => dispatch(incNumber())}><span> + </span></button>
      </div>
    </div>
    </>
  )
}

export default App

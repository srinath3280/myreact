import './App.css';
import React from 'react';

var Address = React.forwardRef((props,refs)=>{
  return (
    <div className="App">
      <h1>Another</h1>
      <input type="text" name="" ref={refs} />
    </div>
  );
})

export default Address;

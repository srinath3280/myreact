import './App.css';
import React, { useEffect } from 'react';
import Address from './address';

function App(){
  var fnumRef = React.useRef();
  var snumRef = React.useRef();
  var addressRef = React.useRef();
  var [add,setAdd] = React.useState();
  function chg1(e){
    if(e.key==="Enter"){
      snumRef.current.focus();
    }
  }
  function chg2(e){
    if(e.key==="Enter"){
      addressRef.current.focus();
      addressRef.current.value = add;
    }
    const x = parseInt(fnumRef.current.value);
    const y = parseInt(snumRef.current.value);
    if(!isNaN(x) && !isNaN(y)){
      setAdd(x+y);
    }
    else{
      setAdd("Enter a valid number");
    }
  }
  useEffect(()=>{
    fnumRef.current.focus();
  },[])
  return (
    <div className="App">
      <h1>Form validations</h1>
      <input type="text" ref={fnumRef} onKeyUp={(e)=>{chg1(e)}}/>
      <br />
      <input type="text" ref={snumRef} onKeyUp={(e)=>{chg2(e)}}/>
      <Address ref={addressRef}></Address>
    </div>
  );
}

export default App;

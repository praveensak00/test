

import React,{useState} from 'react';
//import styled from '@mui/material/styles' ;
// import './App.css';
//import Button from '@mui/material/Button';  
//import { colors } from '@mui/material';



 

const Picker =()=>{

 

  const [Quiz1, setQuiz1]=useState(" ");
  const [Quiz2, setQuiz2]=useState(" ");
  const [Quiz3, setQuiz3]=useState(" ");

  const why =(a,setterFunction)=> {
    const value =a.target.value;
    setterFunction(value ==='500' ? '500':'0'&&
    value ==='1000' ? '1000':'0'   && 
    value ==='2000' ? '2000':'0'   &&
    value ==='3000' ? '3000':'0'   &&
    value ==='4000' ? '4000':'0'   &&
    value ==='5000' ? '5000':'0'   &&

    value ==='6000' ? '6000':'0'   &&
    value ==='7000' ? '7000':'0'   
    
    );
} ;

return(
  <div>
  <field>
  
     <h1>PRICE CALCULATOR </h1>

      <input type="radio" id="daily"></input>
      <label for="daily">Daily</label>
      <input type="radio" id="monthly"></input>
      <label for="monthly">Monthly</label>

    <h2> Plan</h2>
    <select value={Quiz1 }onChange={(a)=> why(a,setQuiz1)}>
    <option value="">select an option</option>
    <option value="1000">professional</option>
    <option value="500">Student</option>

  </select>

  <h2> Additional trainer license </h2>
    <select value={Quiz2 }onChange={(a)=> why(a,setQuiz2)}>
    <option value="">select an option</option>
    <option value="1000">1</option>
    <option value="2000">2</option>
    <option value="3000">3</option>
    <option value="4000">4</option>
    </select>

    <h2> Live participant add on</h2>
    <select value={Quiz3 }onChange={(a)=> why(a,setQuiz3)}>
    <option value="">select an option</option>
    <option value="1000">1</option>
    <option value="2000">2</option>
    <option value="3000">3</option>
    <option value="4000">4</option>
    <option value="5000">5</option>
    <option value="6000">6</option>
    <option value="7000">7</option>
    
    </select>

    {
      (Quiz1&& Quiz2&&Quiz3)&& (
        <p>
          Total Price:{Number(Quiz1)+ Number(Quiz2)+Number(Quiz3)}
        </p>
      )
    }
<button   title="Buy Now"> </button>
</field>
</div>
  );
    };
    export default Picker;



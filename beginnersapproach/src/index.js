import React from 'react';
import ReactDOM from 'react-dom';
const fname = "palak";
const lname = "dwivedi";
const currdate= new Date().toLocaleDateString();
const currtime= new Date().toLocaleTimeString();
ReactDOM.render( 
<div> 
{ /* This is a template literal it helps in not using a 'plus sign' */ } 
<h1> my name is {lname} </h1> 
{ /* Another way includes using a hectic method */ } 
  <br>
    </br> 
    <p2> the addition using js in html in jsx is like { 5 + 2 } </p2>
    <br></br>
    <p3>the date is {currdate}</p3>
    <p4>the time is {currtime}</p4>
</div>
,document.getElementById("root")
);
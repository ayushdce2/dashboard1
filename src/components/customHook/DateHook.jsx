import React from 'react'

function DateHook() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();
// console.log(month, date, year);
let formattedDate = date + " " + month + ", " + year;

  return (
    <p>{formattedDate}</p>
  )
}

export default DateHook
import React, { useState } from 'react'

function TimeHook() {
    const [time, setTime] = useState("");

setInterval(currentTime, 1000);

    function currentTime() {
  const now = new Date();



    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

    let minutes = now.getMinutes();
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    let formattedTime = hours + ':' + formattedMinutes + ' ' + ampm;

    setTime(formattedTime);


}

  return (
    
    <p>{time} </p>
  )
}

export default TimeHook
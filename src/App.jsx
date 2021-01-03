import React, { useState } from 'react';

const App = () =>
{
   const purple = "#8e44ad";
   const red = "red";
    const [bg, newBg] = useState(purple); 
    const [name,newName] = useState('Click ME');
    
    const bgChange = () => {
        
        newBg(red);
        newName("☠️Your SYSTEM is hacked!!☠️");
    }

    const bgBack = () => {
        newName("aa Yeah");
        newBg(purple);
    }

    return(
        <>
        <div style={{backgroundColor: bg}}>
        <button onMouseEnter ={bgChange} onMouseLeave={bgBack} >{name}</button>
        </div>
        </> 
    )
}
export default App;
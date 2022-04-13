import * as React from 'react';

export default function Ball(){
    return(
        <div style={{classList:"ball",background:"#3CC157",left:`${Math.floor(Math.random() * 100)}vw`,top:`${Math.floor(Math.random() * 100)}vh`,transform:`scale(${Math.random()})`,width:`${Math.random()}em`,height:`${Math.random()}em`}}>

        </div>
    )
}
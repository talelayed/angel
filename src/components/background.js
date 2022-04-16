import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky


export default function Background() {
    return (
      <div>
        <Sky
          images={{ 
            /* FORMAT AS FOLLOWS */
            0: "/imgs/back0.png",  /* You can pass as many images as you want */
            1: "/imgs/back2.png",
            2: "/imgs/back3.png",
            3: "/imgs/back4.png",
            4: "/imgs/back5.png",
            5:"/imgs/back6.png",
          }}
          how={50} /* Pass the number of images Sky will render chosing randomly */
          time={400} /* time of animation */
          size={'50px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of background */
        />
      </div>
    );
  }


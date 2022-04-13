import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky


class Background extends Component {
  render() {
    return (
      <div>
        <Sky
          images={{ 
            /* FORMAT AS FOLLOWS */
            0: "https://e7.pngegg.com/pngimages/136/1024/png-clipart-watercolor-leaves-plant-green-thumbnail.png",  /* You can pass as many images as you want */
            1: "https://e7.pngegg.com/pngimages/136/1024/png-clipart-watercolor-leaves-plant-green-thumbnail.png",
            2: "https://e7.pngegg.com/pngimages/136/1024/png-clipart-watercolor-leaves-plant-green-thumbnail.png",
          }}
          how={50} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'30px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of background */
        />
      </div>
    );
  }
}

export default Background;
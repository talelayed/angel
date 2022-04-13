import Ball from "./ball";

export default function Background(){
  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
  const numBalls = 50;
  const balls = [];

for (let i = 0; i < numBalls; i++) {
    balls.push(<Ball/>);
  }
  balls.forEach((el,i) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };
  
    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });

  return(
    <div>
      {
        balls.map(elt=>elt)
      }
    </div>
  )
    }
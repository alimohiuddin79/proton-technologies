// Some random colors
const colors: string[] = ["#03045e", "#00b4d8", "#d90429", "#ffb703", "#fb8500", "#80ed99", "#a5a58d"];

const numBalls: number = 60;
const balls: HTMLDivElement[] = [];

for (let i: number = 0; i < numBalls; i++) {
  let ball: HTMLDivElement = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  const ballSize: number = Math.random();
  ball.style.width = `${ballSize}em`;
  ball.style.height = `${ballSize}em`;

  const maxLeftPosition: number = 100 - ballSize; // Limit the left position to avoid crossing the width.
  ball.style.left = `${Math.floor(Math.random() * maxLeftPosition)}%`;

  ball.style.top = `${Math.floor(Math.random() * 300)}%`; // Set top position as percentage.

  ball.style.transform = `scale(${Math.random()})`;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el: HTMLDivElement, i: number) => {
  let to: { x: number; y: number } = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim: Animation = el.animate(
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

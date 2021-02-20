import React, { Component } from "react";
import { Frame, Scroll, useCycle } from "framer";

export function MyComponent() {
  const [scale, cycle] = useCycle(3, 1);
  return <Frame animate={{ scale: scale }} onTap={() => cycle()} />;
}
export function MyComponent2() {
  const [twist, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 360 * 2 }
  );

  return (
    <Frame animate={twist} onTap={() => cycle()} title="lol" color="red">
      <h1>Frame Header</h1>
    </Frame>
  );
}
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Home</h2>

        {/* <MyComponent2 /> */}
      </>
    );
  }
}

export default Home;

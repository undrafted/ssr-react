import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the home component</div>
      <button onClick={() => console.log("press me 1")}>Press me</button>
    </div>
  );
};

export default { component: Home };

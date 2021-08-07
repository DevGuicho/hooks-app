import React from "react";

const Small = React.memo(({ counter }) => {
  console.log("Me volví a llmar :)");
  return <small>{counter}</small>;
});

export default Small;

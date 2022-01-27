import React from "react";

const Card = ({ boca }) => {
  console.log(boca, "props desde el componente");
  return (
    <div>
      <h1>Fact: {boca.fact}</h1>
    </div>
  );
};

export default Card;

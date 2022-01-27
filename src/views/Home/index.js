import React, { useEffect, useMemo, useState } from "react";
import { getCatsFacts } from "../../api/catsService";
import Card from "../../components/Card";
import "./style.css";

const Home = () => {
  const [gatos, setgatos] = useState(0);

  useEffect(() => {
    handleApiRequest();
  }, [gatos]);

  const handleApiRequest = async () => {
    const { data } = await getCatsFacts();
    setgatos(data);
  };

  const handleClick = () => {
    setgatos(gatos + 1);
  };

  return (
    <div className="container">
      aaas
      <button onClick={handleClick}>Click</button>
      <Card boca={gatos} />
    </div>
  );
};

export default Home;

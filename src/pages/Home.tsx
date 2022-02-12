import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import CharacterList from "../components/characterList";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const x = io("http://localhost:3001/");
    x.on("get-data", (x) => setData(x));
  }, []);
  return (
    <>
      <CharacterList r={data} />
    </>
  );
};
export default Home;

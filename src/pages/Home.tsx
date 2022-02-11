import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import CharacterList from "../components/characterList";
const Home = () => {
  useEffect(() => {
    const x = io("http://localhost:3001/");
    x.on("get-data", (x) => setData(x));
  });
  const [data, setData] = useState([]);
  return (
    <>
      s <CharacterList r={data} />
    </>
  );
};
export default Home;

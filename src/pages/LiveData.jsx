import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Character from "../components/Character";
import { AppContext } from "../context";

const RosterDiv = styled.div`
  margin: auto;
  max-width: 550px;
  text-align-last: center;
  border: 1px solid black;
`;
const RosterList = styled.ol`
  columns: 5;
  list-style-type: none;
`;

const LiveDataPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [roster, setRoster] = useState();
  useEffect(() => {
    state.socket &&
      state.socket.on("recieve-changes", (data) => setRoster(data));
  }, [state.socket]);
  useEffect(() => {
    const x = Array(5)
      .fill(0)
      .map((row) => new Array(5).fill("/"));
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x[i].length; j++) {
        x[i][j] = { id: -(i * 5 + j), name: "/" };
      }
    }
    setRoster(x);
  }, []);

  //--------------------------------------------------------------
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  // const handleDragStart = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>Live Data</h4>
        <p>
          Drag colored items to the "empty" roster above. <br />
          Open this page in another tab to see changes (somewhat) live
        </p>
      </div>
      <RosterDiv>
        <RosterList>
          {roster &&
            [0, 1, 2, 3, 4].map((x) =>
              [0, 1, 2, 3, 4].map((y) => {
                let item = roster[x][y];
                return (
                  <li
                    key={-x + -y}
                    draggable
                    onDrop={(e) => {
                      const r = [...roster];
                      r[x][y] = state.drag;
                      state.socket.emit("send-changes", r);
                      setRoster(r);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => handleDragEnter(e)}
                    onDragLeave={(e) => handleDragLeave(e)}
                    onDragStart={(e) =>
                      dispatch({ type: "drag_start", data: item })
                    }
                  >
                    {item.name}
                  </li>
                );
              })
            )}
        </RosterList>
        {state.data
          .sort((a, b) => a.class > b.class)
          .map((v) => (
            <div
              draggable
              key={v.id}
              onDragStart={(e) => dispatch({ type: "drag_start", data: v })}
              onDrop={(e) => handleDrop(e)}
              onDragOver={(e) => handleDragOver(e)}
              onDragEnter={(e) => handleDragEnter(e)}
              onDragLeave={(e) => handleDragLeave(e)}
            >
              <Character c={v} />
            </div>
          ))}
      </RosterDiv>
    </>
  );
};
export default LiveDataPage;

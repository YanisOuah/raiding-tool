import { useContext } from "react";
import styled from "styled-components";
import Character from "../components/Character";
import { AppContext } from "../context";
import raidclasses from "../data/classes";
const RosterDiv = styled.div`
  div {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    &:last-child {
      border-bottom: 1px solid black;
    }
  }
`;
const HomePage = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        {raidclasses.map((c) => (
          <RosterDiv key={c.id}>
            {state.data
              .filter((z) => z.class === c.id)
              .map((x) => (
                <Character key={x.id} c={x} />
              ))}
          </RosterDiv>
        ))}
      </div>
    </>
  );
};
export default HomePage;

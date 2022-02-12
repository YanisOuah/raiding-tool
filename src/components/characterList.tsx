import React from "react";
import styled from "styled-components";
import Character from "./Character";
import classes from "../data/classes";
type character = {
  id: number;
  name: string;
  class: number;
  spec: number;
};
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
export default function CharacterList(props: { r: character[] }) {
  return (
    <div style={{ display: "inline-flex" }}>
      {classes.map((c: any) => (
        <RosterDiv key={c.id}>
          {props.r
            .filter((z) => z.class === c.id)
            .map((x) => (
              <Character key={x.id} c={x} />
            ))}
        </RosterDiv>
      ))}
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import classes from "../data/classes";
interface character {
  id: number;
  name: string;
  class: number;
  spec: number;
}

const CharDiv = styled.div<{ classColor: string }>`
  width: 6em;
  height: 21px;
  text-align: center;
  background-color: ${(props) => props.classColor};
  user-select: none;
  display: flex;
  justify-content: space-between;
  position: relative !important;
  > span {
    position: absolute !important;
    right: 0px;
    //position: absolute !important;
    //z-index: -1;
  }
  img {
    transform: scale(1.2);
    opacity: 50%;
  }
`;
export default function Character(props: {
  c: character;
  deletable?: boolean;
}) {
  const x = classes.find((x) => x.id === props.c.class);
  if (x === undefined) return <p>empty</p>;
  const y = x.specs[props.c.spec];
  return (
    <CharDiv classColor={x.color}>
      {props.c.name}
      <img src={y.img} alt={y.title} width="20px" height="20x" />
    </CharDiv>
  );
}

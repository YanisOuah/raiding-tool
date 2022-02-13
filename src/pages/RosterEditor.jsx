import React, { useContext, useState } from "react";
import styled from "styled-components";
import Character from "../components/Character";
import { AppContext } from "../context";
import raidclasses from "../data/classes";

const ClassLabel = styled.label`
  display: inline-block;
  margin: 0 5px;
  font-size: small;
  text-align: center;

  & > input {
    /* HIDE RADIO */
    visibility: hidden; /* Makes input not-clickable */
    position: absolute; /* Remove input from document flow */
  }
  & > input + img {
    /* IMAGE STYLES */
    cursor: pointer;
    border: 2px solid transparent;
  }
`;
export default function RosterEditor() {
  const { state } = useContext(AppContext);
  const [formData, setFormData] = useState({
    class: null,
    spec: null,
    name: "",
  });
  const createChar = (n, c, s) => {
    console.log(state);
    state.socket.emit("character-add", {
      class: formData.class.id,
      spec: formData.spec.id,
      name: formData.name,
    });
    setFormData({
      class: null,
      spec: null,
      name: "",
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "200px", margin: "auto" }}>
          {raidclasses.map((c) => (
            <ClassLabel
              key={c.title}
              style={{
                opacity:
                  formData.class && c.id !== formData.class.id ? "50%" : "100%",
              }}
            >
              <input
                type="radio"
                id={c.title}
                name="classes"
                value={c.id}
                onChange={() => {
                  setFormData({
                    class: c,
                    spec: null,
                    name: "",
                  });
                }}
              />
              <img width="40px" src={c.img} alt="Logo" />
            </ClassLabel>
          ))}
        </div>
        {formData.class && <hr style={{ width: "150px" }} />}
        <div>
          {formData.class &&
            formData.class.specs.map((s) => (
              <ClassLabel
                key={s.title}
                style={{
                  opacity:
                    formData.spec && s.id !== formData.spec.id ? "50%" : "100%",
                }}
              >
                <input
                  type="radio"
                  id={s.title}
                  name="specs"
                  value={s.title}
                  onChange={() => setFormData({ ...formData, spec: s })}
                />
                <img width="40px" src={s.img} alt="Logo" />
              </ClassLabel>
            ))}
        </div>
        {formData.spec && <hr style={{ width: "150px" }} />}
        {formData.spec && (
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
        )}
        <br />
        <button
          onClick={createChar}
          disabled={
            formData.spec === null || formData.name.replace(/\s+/g, "") === ""
          }
        >
          add
        </button>
      </div>
      <div>
        {state.data.map((v) => (
          <Character c={v} key={v.id} deletable />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import DragPage from "./pages/Drag";
import LiveDataPage from "./pages/LiveData";

const Nav = styled.nav`
  height: 5%;
  background-color: #849797;
  display: flex;
  justify-content: center;
  > a {
    margin: auto 20px;
    color: #242424;
    text-decoration: underline;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/drag">DragNDrop</Link>
        <Link to="/livedata">LiveData</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drag" element={<DragPage />} />
        <Route path="/livedata" element={<LiveDataPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

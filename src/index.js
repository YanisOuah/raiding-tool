import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
        <Link to="/other">Other</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/other" element={<p>other</p>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

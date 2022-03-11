import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled.button`
  margin-left: 20px;
  margin-top: 20px;
  padding: 20px 40px 20px 40px;
`;

const Error = () => {
  return (
    <>
      <h1>Oops ! page not found</h1>
      <Link to="/shopping-cart">
        <Btn>HOME</Btn>
      </Link>
    </>
  );
};

export default Error;

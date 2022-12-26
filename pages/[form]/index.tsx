import React from "react";
import Link from "next/link";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 450px;
  background: black;
  border-radius: 10px;
  color: #ffffff;
  margin-top: 5rem;
  margin-left: 5rem;
  padding-left: 2rem;
  padding-top: 3rem;
`;
const Button = styled.button`
  background-color: #6d706d;
  color: #fff;
  padding: 10px 30px;
  /* margin: auto; */
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 30px;
`;
const H2 = styled.h2`
  margin: auto;
  font-size: 25px;
`;
const P = styled.p`
  font-size: 20px;
  margin-top: 5px;
`;
const route = () => {
  return (
    <Div>
      <Link href={"/"}>
        <H2>Dynamic routing form page </H2>
        <P> when we click on next it will go to the main page</P>
        <Button>Next</Button>
      </Link>
    </Div>
  );
};

export default route;

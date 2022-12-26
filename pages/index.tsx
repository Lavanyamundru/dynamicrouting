import React from "react";
import Link from "next/link";
import styled from "styled-components";
const Div =styled.div`
  border:1px solid black;
  width:100px;
  height:50px;
  flex-wrap: nowrap;
    display:flex;
    flex-direction:column;
    width: 320px;
    height: 190px;
    margin: 60px 66px;
    padding: 22px 20px;
`
const index = () => {
  return (
    <Div>
      <h1>Dynamic Routing</h1>
      <Link href={"/[form]"} as="/form">
       Dynamic Route (form)
      </Link>
     <br />
      <Link href={"/[form]/[sign]"} as="/form/sign">
        Dynamic Route (sign)
      </Link>
      <br />
      <Link href={"/form/sign/route"}>Dynamic Route (route)</Link>
    </Div>
  );
};

export default index;

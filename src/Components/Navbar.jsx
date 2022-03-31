import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-decoration: none;
`;

const LinkBox = styled.span`
  // border: 1px solid red;
  margin-right: 10px;
`;
const NavBoxWrapper = styled.div`
  // border: 1px solid red;
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  return (
    <>
      <DivWrapper>
        <h3>React Router Assignment</h3>
        <NavBoxWrapper>
          <LinkBox>
            <Link to="/">HOME</Link>
          </LinkBox>
          <Link to="/products">PRODUCTS</Link>
          {/* <a href="/products:id">Product</a> */}
        </NavBoxWrapper>
      </DivWrapper>
      <hr />
    </>
  );
};

export { Navbar };

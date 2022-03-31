import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // border: 1px solid red;
  text-align: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <h3>Homepage</h3>
      <p>We provide many product just click on products button in navbar</p>
      <p>Happy Shopping</p>
    </Wrapper>
  );
};

export default Home;

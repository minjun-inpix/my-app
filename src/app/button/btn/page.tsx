"use client";

import Styled, { styled } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
    border-radius:50%;
`;

const formPage = () => {
  return (
    <>
      <Father>
        <Box color="teal">Hello</Box>
        <Circle color="tomato" as="a">Hello</Circle>
      </Father>
    </>
  );
};

export default formPage;

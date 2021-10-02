import styled from "styled-components";

// Layer header
export const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;
`;

// Container Header
export const HeaderContainer = styled.header`
  height: ${(props) => (props.isHome ? "400px" : "auto")};
  background-image: url(/banner3.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
`;

export const HeaderStyled = styled.div`
  position: relative;
  z-index: 101;
`;

// Header optional content
export const HeaderContent = styled.div`
  text-align: center;
  width: 50%;
  margin: auto;
  padding: 40px 0px;
  overflow: hidden;
  font-family: Yaldevi, sans-serif;
  letter-spacing: 2px;
`;

// Title Header
export const HeaderTitle = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
`;

// Header Description
export const HeaderDescription = styled.p`
  color: #cdcdcd;
`;

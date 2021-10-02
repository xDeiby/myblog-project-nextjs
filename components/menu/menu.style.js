import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

//  Menu Buttons
export const MenuButtons = styled.ul`
  list-style: none;
  padding: 0px;
  display: inline-block;
`;

// Container Links
export const Li = styled.li`
  display: inline-block;
`;

// Links
export const A = styled.a`
  display: block;
  padding: 5px 15px;
  font-size: 0.8em;
  font-weight: bold;
  /* font-family: Yaldevi, sans-serif; */
  /* text-transform: uppercase; */

  &:hover {
    font-size: 0.9em;
    /* color: #006edc; */
    /* border-bottom: 1px solid #cdcdcd; */
  }

  &:active {
    color: red;
    transform: translateY(4px);
    transition: ease 0.1s;
  }
`;

// Menu Icon Buttons
export const Icon = styled(FontAwesomeIcon)`
  width: 17px;
  height: 17px;
  cursor: pointer;
  margin-left: 10px;
`;

//  Menu Buttons Container
export const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

// Container Icon Buttons
export const NavRight = styled.div``;

// Menu Container
export const Nav = styled.nav`
  color: #cdcdcd;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  padding: 20px 0px;
  /* position: fixed; */
`;

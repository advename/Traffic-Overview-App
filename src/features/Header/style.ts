import s from "styled-components"; // styled
import { NavLink } from "react-router-dom";

export const Container = s.div`
    display: flex;
    width: 100vw;
    height: 40px;
    box-shadow: 0px 3px 4px 0px #888888;
    align-items: center;
    padding: 0px 20px;
`;

export const Logo = s.p`
    font-size: 28px;
    color: green;
    font-family: fantasy;
`;

export const LinksContainer = s.ul`
    margin-left: 30px;
`;

export const Link = s(NavLink)<Partial<NavLink> & { size: string }>`


    color: #777785;
    text-decoration: none;
    padding: 5px 20px;
    font-weight: 400;
 
    // Variable font size
    font-size: ${props => {
      switch (props.size) {
        case "small":
          return "20px";
        case "medium":
          return "40px";
        default:
          return "20px";
      }
    }};
    
    // Active class
    &.active {
        color: black;
        font-weight: 500;
    }

    &:hover{
        color: black;
    }



`;

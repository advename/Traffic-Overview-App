import s from "styled-components"; // styled
import { Props } from "./TrafficEvent";
/**
 * Eventough that we use a div tag here, we actually specify the tag element
 * inside the JSX thanks to the "as" property.
 * Source: https://styled-components.com/docs/api#as-polymorphic-prop
 */
export const EventBox = s.div<Partial<Props>>`
    border-radius: 5px;
    padding: 15px 20px;
    background-color: ${props => {
      switch (props.severity) {
        case "Unknown":
          return "#d4d4d4";
        case "Minor":
          return "#95ff80";
        case "Moderate":
          return "#ffd280";
        case "Major":
          return "#ff8080";
        default:
          return "rgba(0,0,0,0)";
      }
    }};
    margin: 20px 0px;
`;

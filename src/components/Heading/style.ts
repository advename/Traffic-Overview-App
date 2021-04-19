import s from "styled-components"; // styled
import { Props } from "./Heading";
/**
 * Eventough that we use a div tag here, we actually specify the tag element
 * inside the JSX thanks to the "as" property.
 * Source: https://styled-components.com/docs/api#as-polymorphic-prop
 */
export const Heading = s.div<
  Partial<Props> & {
    as: keyof JSX.IntrinsicElements;
  }
>`
    font-weight: 500;
    ${props => {
      switch (props.level) {
        case 1:
          return "2em";
        case 2:
          return "1.5em";
        case 3:
          return "1.17em";
        case 4:
          return "1.0em";
        case 5:
          return "0.83em";
        case 6:
          return "0.67em";
        default:
          return "1em";
      }
    }}
    margin-bottom: 1.5em;
`;

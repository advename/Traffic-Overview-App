import s from "styled-components"; // styled
import { theme } from "./theme";

/**
 * Default Page container
 */
export const PageContainer = s.div<Partial<typeof theme>>`
    width: 100%;
    max-width: 1100px;
    padding: 20px 50px;
    margin: 0 auto;

    @media (max-width: ${props => props.theme.breakpointsDF.xld}) {
        max-width: 95%;
        padding: 20px 2.5%;
    }

`;

/**
 * Full Width Page container
 */
export const FWPageContainer = s.div`
    width: 100%;
    margin: 0 auto;
`;

// export our theme to the provider
// This is globally available in styled-components when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styled-components';

export const theme = {
  /**
   * BREAKPOINTS APPLICATION
   *
   * ====================================
   * FIRST APPROACH - MOBILE FIRST
   * ====================================
   * Extra small devices (portrait phones, less than 576px)
   * No media query since this is the default in Bootstrap
   *
   * @media (min-width: 576px) {}
   * @media (min-width: 768px) {}
   * @media (min-width: 992px) {}
   *
   * ====================================
   * SECOND APPROACH - DESKTOP FIRST
   * ====================================
   * @media (max-width: 1199px) {}
   * @media (max-width: 991px) {}
   * @media (max-width: 767px) {}
   */
  breakpointsMF: {
    // Mobile first
    sd: "576px", // Small devices (landscape phones, 576px and up)
    md: "768px", // Medium devices (tablets, 768px and up)
    ld: "992px", // Large devices (desktops, 992px and up)
    xld: "1200px" // Extra large devices (large desktops, 1200px and up)
  },
  breakpointsDF: {
    // Desktop first
    sd: "575px", // Small devices (landscape phones, 576px and up)
    md: "767px", // Medium devices (tablets, 768px and up)
    ld: "991px", // Large devices (desktops, 992px and up)
    xld: "1199px" // Extra large devices (large desktops, 1200px and up)
  }
};

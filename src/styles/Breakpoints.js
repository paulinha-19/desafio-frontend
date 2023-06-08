const size = {
    xs: '600px', // for small screen mobile
    sm: '768px', // for mobile screen
    md: '1000px', // for tablets
    lg: '1220px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
  }
  
  export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  }
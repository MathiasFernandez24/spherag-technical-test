const primitiveColors = {
  blue: {
    "50": "#E8F5FB",
    "100": "#B6E0F3",
    "200": "#93D1ED",
    "300": "#62BCE4",
    "400": "#44AFDF",
    "500": "#159BD7",
    "600": "#138DC4",
    "700": "#0F6E99",
    "800": "#0C5576",
    "900": "#09415A",
    spherag: "#283271",
  },
  grey: {
    "50": "#F2F2F2",
    "100": "#D6D6D6",
    "200": "#C2C2C2",
    "300": "#A7A7A7",
    "400": "#959595",
    "500": "#7B7B7B",
    "600": "#707070",
    "700": "#575757",
    "800": "#444444",
    "900": "#343434",
  },
  green: {
    "50": "#EEFBE8",
    "100": "#CAF3B6",
    "200": "#B1ED93",
    "300": "#8DE462",
    "400": "#78DF44",
    "500": "#56D715",
    "600": "#4EC413",
    "700": "#3D990F",
    "800": "#2F760C",
    "900": "#245A09",
  },
  red: {
    "50": "#FDE8E8",
    "100": "#F9B6B6",
    "200": "#F59393",
    "300": "#F06262",
    "400": "#ED4444",
    "500": "#E91515",
    "600": "#D41313",
    "700": "#A80F0F",
    "800": "#830C0C",
    "900": "#630909",
  },
  yellow: {
    "50": "#FFFBE8",
    "100": "#FFF3B6",
    "200": "#FFED93",
    "300": "#FFE462",
    "400": "#FFDF44",
    "500": "#FFD715",
    "600": "#E6C413",
    "700": "#B39B0F",
    "800": "#8A760C",
    "900": "#685A09",
  },
  base: {
    white: "#FFFFFF",
    black: "#000000",
  },
};

export const colors = {
  primary: {
    lighter: primitiveColors.blue[200],
    default: primitiveColors.blue[500],
    darker: primitiveColors.blue.spherag,
  },
  secondary: {
    lighter: primitiveColors.green[200],
    default: primitiveColors.green[500],
    darker: primitiveColors.green[700],
  },
  neutral: {
    lighter: primitiveColors.grey[200],
    default: primitiveColors.grey[500],
    darker: primitiveColors.grey[700],
  },
  background: {
    lighter: primitiveColors.grey[200],
    default: primitiveColors.grey[500],
    darker: primitiveColors.grey[700],
    white: primitiveColors.base.white,
  },
  Text: {
    default: primitiveColors.grey[800],
    lighter: primitiveColors.grey[200],
    primaryDefault: primitiveColors.blue[500],
    primaryDarker: primitiveColors.blue[700],
    placeHolder: primitiveColors.grey[600],
    white: primitiveColors.base.white,
    black: primitiveColors.base.black,
  },
  common: {
    error: primitiveColors.red[500],
    succes: primitiveColors.green[500],
    allColors: {
      greenLight: primitiveColors.green[300],
      green: primitiveColors.green[500],
      greenDark: primitiveColors.green[800],
      yellow: primitiveColors.yellow[700],
      red: primitiveColors.red[500],
      grey: primitiveColors.grey[500],
    },
  },
  mapPin: {
    mapPin1: primitiveColors.green[400],
    mapPin2: primitiveColors.yellow[400],
    mapPin3: primitiveColors.blue[400],
    mapPin4: primitiveColors.red[400],
  },
};

import { Box, useMediaQuery, useTheme } from "@mui/material";

import DashboardBox from "@/components/DashboardBox";

import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLg = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;

const gridTemplateSm = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;
export default function Dashboard() {
  const isAboveMedScreen = useMediaQuery("(min-width: 1200px)");

  const gridStyleLg = {
    gridTemplateColumns: "maskRepeat(3, minmax(370px, 1fr))",
    gridTemplateRows: "repeat(10, minxmax(60px, 1fr))",
    gridTemplateAreas: gridTemplateLg,
  };
  const gridStyleSm = {
    gridAutoColumns: "1fr",
    gridAutoRows: "80px",
    gridTemplateAreas: gridTemplateSm,
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={isAboveMedScreen ? gridStyleLg : gridStyleSm}
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}

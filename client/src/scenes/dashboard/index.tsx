import { Box, useMediaQuery, useTheme } from "@mui/material";

import DashboardBox from "@/components/DashboardBox";

type Props = {};

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
export default function Dashboard(props: Props) {
  const isAboveMedScreen = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();

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
      <DashboardBox gridArea="a" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="b" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="c" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="d" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="e" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="f" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="g" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="h" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="i" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="j" bgcolor="#fff"></DashboardBox>
    </Box>
  );
}

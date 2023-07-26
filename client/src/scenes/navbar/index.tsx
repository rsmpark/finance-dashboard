import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";

import FlexBetween from "@/components/FlexBetween";

type Props = {};

export default function Navbar(props: Props) {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  const hoverColor = { "&:hover": { color: palette.primary[100] } };

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0 rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="2rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          FINDASH
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem" color={palette.grey[300]}>
        <Box
          sx={selected === "dashboard" ? null : hoverColor}
          color={selected === "dashboard" ? "inherit" : palette.grey[700]}
        >
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Dashboard
          </Link>
        </Box>
        <Box
          sx={selected === "predictions" ? null : hoverColor}
          color={selected === "predictions" ? "inherit" : palette.grey[700]}
        >
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
}

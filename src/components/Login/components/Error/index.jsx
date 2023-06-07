import React from "react";
import { Box, Typography } from "@mui/material";

export default function Error({ display, text }) {
  return (
    <Box
      sx={{
        display: display,
        alignItems: "center",
        width: "95%",
        height: "57px",
        marginTop: "27px",
        backgroundColor: "#efdfde",
        border: "1px solid #ead6d7",
        borderRadius: "7px",
      }}
    >
      <Typography
        variant="body1"
        style={{
          color: "#b37370",
          fontWeight: "500",
          marginTop: "11px",
          marginLeft: "17px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

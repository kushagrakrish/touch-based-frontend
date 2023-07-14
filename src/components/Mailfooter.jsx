import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Typography } from "@mui/material";
import React from "react";

const Mailfooter = () => {
  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "#F1F2FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        mt: 2,
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{ color: "#808BD0", fontWeight: "medium", fontSize: "14px" }}
      >
        You have 24 credits left
      </Typography>
      <button className='bg-[#7480CC] text-white px-2 font-normal py-2 rounded-full flex items-center gap-2'>
        <AddCircleOutlineIcon />
        Add Credits
      </button>
    </Box>
  );
};

export default Mailfooter;

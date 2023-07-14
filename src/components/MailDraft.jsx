import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";

const MailDraft = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F1F2FF",
          px: 2,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E5E5E5",
            pb: 2,
          }}
        >
          <Typography
            variant='h6'
            component='h1'
            sx={{ color: "#828CD1", fontWeight: "bold" }}
          >
            Draft #1
          </Typography>
          <button className='bg-[#D9DEFF] px-4 font-normal py-2 rounded-full flex items-center gap-2 text-[#8A94D7]'>
            <ContentCopyIcon className='text-[#8A94D7]' />
            Copy
          </button>
        </Box>
        <Typography
          variant='body1'
          sx={{ textAlign: "justify", color: "text.primary", my: "16px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusamus asperiores soluta voluptas! Voluptatum enim ad id reiciendis
          praesentium illo nisi deleniti. Dolores, corrupti dolore.
        </Typography>
        <ThumbsUpDownOutlinedIcon sx={{ color: "#C9CEF1" }} />
      </Box>
    </>
  );
};

export default MailDraft;

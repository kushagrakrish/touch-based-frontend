import React, { useState } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import {
  MoveToInbox as MoveToInboxIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import MailDraft from "./MailDraft";
import Mailfooter from "./Mailfooter";

const UserProfile = () => {
  const [showMailDraft, setShowMailDraft] = useState(false);
  const [isEngageSelected, setIsEngageSelected] = useState(false);

  const handleGenerateMail = (e) => {
    setShowMailDraft(!showMailDraft);
  };

  const handleToggleEngage = () => {
    setIsEngageSelected(!isEngageSelected);
  };
  return (
    <>
      <Box
        className='max-w-sm rounded-lg'
        sx={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E5E5",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          mx: "auto",
          pt: "15px",
        }}
      >
        {/* Header */}
        <div className='px-[10px]'>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E5E5E5",
              pb: "10px",
            }}
          >
            <Typography
              variant='h6'
              component='h1'
              sx={{ color: "#808BD0", fontWeight: "bold" }}
            >
              Touch Base
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SettingsIcon sx={{ color: "#808BD0" }} />
              <Typography
                variant='subtitle1'
                sx={{ color: "#808BD0", fontWeight: "bold" }}
              >
                Free Credits
              </Typography>
            </Box>
          </Box>
          {/* Toogle Tabs */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#F5F5F5",
              borderRadius: 999,
              my: 3,
            }}
          >
            <Box
              className={`font-semibold ${
                !isEngageSelected ? "bg-[#E9EAFF]" : "bg-[#F5F5F5]"
              }`}
              sx={{
                py: 1.5,
                px: 3,
                textAlign: "center",
                width: "50%",
                color: "#A9B0E3",
                borderRadius: 999,
                cursor: "pointer",
              }}
              onClick={handleToggleEngage}
            >
              OUTREACH
            </Box>
            <Box
              className={`font-semibold ${
                isEngageSelected ? "bg-[#E9EAFF]" : "bg-[#F5F5F5]"
              }`}
              sx={{
                py: 1.5,
                px: 3,
                textAlign: "center",
                width: "50%",
                borderRadius: 999,
                cursor: "pointer",
              }}
              onClick={handleToggleEngage}
            >
              ENGAGE
            </Box>
          </Box>
          {/* Content Div */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              borderBottom: "1px solid #E5E5E5",
              pb: 2,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#DEE1FF",
                width: 50,
                height: 50,
                color: "#ABB3EA",
              }}
            >
              RM
            </Avatar>
            {/* Content */}
            <Box>
              <Typography
                variant='h5'
                sx={{ fontWeight: "medium", color: "black" }}
              >
                Rachit Manchanda
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{ fontWeight: "normal", color: "#8c8c8c", mt: 1, mb: 2 }}
              >
                Design Guy @Samudai
              </Typography>
              <button
                className='bg-[#7480CC] text-white px-4 text-sm md:text-base font-normal py-3 rounded-full flex items-center gap-2'
                onClick={() => handleGenerateMail()}
              >
                <MoveToInboxIcon />
                Generate Outreach Mail
              </button>
            </Box>
          </Box>
          {/* Mail Draft */}
          {showMailDraft && (
            <>
              <Box sx={{ px: 1, py: 2 }}>
                <MailDraft />
              </Box>
              <Box sx={{ px: 1, pb: 2 }}>
                <MailDraft />
              </Box>
            </>
          )}
        </div>
        <Box>
          <Mailfooter />
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;

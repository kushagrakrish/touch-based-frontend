import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import MailDraft from "./MailDraft";
import Mailfooter from "./Mailfooter";

const UserProfile = () => {
  const [showMailDraft, setShowMailDraft] = useState(false);

  const handleGenerateMail = () => {
    setShowMailDraft(true);
  };

  return (
    <>
      <div className='px-2 bg-[#FFFFFF] border rounded-lg shadow-lg py-5'>
        {/* Header */}
        <div className='w-full flex items-center justify-between border-b border-gray-300 pb-4'>
          <h1 className='text-xl text-[#808BD0] font-bold'>Touch Base</h1>
          <div className='flex flex-row-reverse items-center gap-2'>
            <SettingsIcon className='text-[#808BD0]' />
            <h2 className='text-base font-semibold text-[#808BD0]'>
              Free Credits
            </h2>
          </div>
        </div>
        {/* Toogle Tabs */}
        <div className='w-full rounded-full bg-[#F5F5F5] flex items-center my-5'>
          <div className='rounded-full py-3 px-3 text-center w-1/2 text-[#A9B0E3] font-semibold bg-[#E9EAFF]'>
            OUTREACH
          </div>
          <div className='bg-[#F5F5F5] rounded-full py-3 px-3 text-center font-semibold w-1/2'>
            ENGAGE
          </div>
        </div>
        {/* Content Div */}
        <div className='flex items-start gap-3 border-b border-gray-300 pb-4'>
          <Avatar
            sx={{ bgcolor: "#DEE1FF", width: 50, height: 50, color: "#ABB3EA" }}
          >
            RM
          </Avatar>
          {/* Content */}
          <div>
            <h1 className='text-2xl font-medium text-black'>
              Rachit Manchanda
            </h1>
            <h2 className='text-base font-normal text-[#8c8c8c] mt-1 mb-2 '>
              Design Guy @Samudai
            </h2>
            <button
              className='bg-[#7480CC] text-white px-4 font-normal py-3 rounded-full flex items-center gap-2'
              onClick={handleGenerateMail}
            >
              <MoveToInboxIcon />
              Generate Outreach Mail
            </button>
          </div>
        </div>
        {showMailDraft && (
          <>
            <div className='px-2 py-4'>
              <MailDraft />
            </div>
            <div className='px-2'>
              <MailDraft />
            </div>
          </>
        )}
        <div>
          <Mailfooter />
        </div>
      </div>
    </>
  );
};

export default UserProfile;

import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const UserProfile = () => {
  return (
    <>
      <div className='px-2 bg-gray-100 border rounded-lg shadow-lg py-5'>
        {/* Header */}
        <div className='w-full flex items-center justify-between border-b border-gray-300 pb-4'>
          <h1 className='text-xl text-[#7B83EB] font-bold'>Touch Base</h1>
          <div className='flex flex-row-reverse items-center gap-2'>
            <SettingsIcon className='text-[#7B83EB]' />
            <h2 className='text-base font-semibold text-[#7B83EB]'>
              Free Credits
            </h2>
          </div>
        </div>
        {/* Toogle Tabs */}
        <div className='w-full rounded-full bg-gray-200 flex items-center my-5'>
          <div className='rounded-full py-3 px-3 text-center w-1/2 text-[#5259be] font-semibold bg-[#a0b7ff]'>
            OUTREACH
          </div>
          <div className='bg-gray-200 rounded-full py-3 px-3 text-center font-semibold w-1/2'>
            ENGAGE
          </div>
        </div>
        {/* Content Div */}
        <div className='flex items-start gap-3 border-b border-gray-300 pb-4'>
          <Avatar sx={{ bgcolor: "#7B83EB", width: 50, height: 50 }}>RM</Avatar>
          {/* Content */}
          <div>
            <h1 className='text-2xl font-medium text-black'>
              Rachit Manchanda
            </h1>
            <h2 className='text-base font-normal text-gray-400 my-2'>
              Design Guy @Samudai
            </h2>
            <button className='bg-[#606ce7] text-white px-4 font-normal py-3 rounded-full flex items-center gap-2'>
              <MoveToInboxIcon />
              Generate Outreach Mail
            </button>
          </div>
        </div>
        {/* Footer */}
      </div>
      <div className='py-5 bg-[#a0b7ff] flex items-center justify-between px-2 rounded-b-lg'>
        <h3 className='font-medium text-sm'>You've 24 credits left</h3>
        <button className='bg-[#606ce7] text-white px-4 font-normal py-3 rounded-full flex items-center gap-2'>
          <AddCircleOutlineIcon />
          Add Credits
        </button>
      </div>
    </>
  );
};

export default UserProfile;

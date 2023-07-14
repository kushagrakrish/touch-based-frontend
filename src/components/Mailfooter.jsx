import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const Mailfooter = () => {
  return (
    <div className='py-5 bg-[#F1F2FF] flex items-center justify-between px-2 rounded-b-lg mt-4'>
      <h3 className='font-medium text-sm text-[#808BD0]'>
        You have 24 credits left
      </h3>
      <button className='bg-[#7480CC] text-white px-2 font-normal py-2 rounded-full flex items-center gap-2'>
        <AddCircleOutlineIcon />
        Add Credits
      </button>
    </div>
  );
};

export default Mailfooter;

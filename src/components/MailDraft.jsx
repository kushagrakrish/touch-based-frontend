import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
const MailDraft = () => {
  return (
    <>
      <div className='bg-[#F1F2FF] px-2 py-5'>
        <div className='flex justify-between w-full items-center border-b border-gray-400 pb-4'>
          <h1 className='text-[#828CD1] font-semibold '>Draft #1</h1>
          <button className='bg-[#D9DEFF] px-4 font-normal py-2 rounded-full flex items-center gap-2 text-[#8A94D7]'>
            <ContentCopyIcon className='text-[#8A94D7]' />
            Copy
          </button>
        </div>
        <p className='text-justify text-gray-800 font-normal py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusamus asperiores soluta voluptas! Voluptatum enim ad id reiciendis
          praesentium illo nisi deleniti. Dolores, corrupti dolore.
        </p>
        <ThumbsUpDownOutlinedIcon className='text-[#C9CEF1]' />
      </div>
    </>
  );
};

export default MailDraft;

import React from "react";

export const Button = ({ label, iconUrl,backgroundColor, borderColor,textColor,fullWidth}) => {
  return (
    <div>
      <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
      font-montserrat text-lg leading-none  ${backgroundColor} ? ${backgroundColor} ${textColor} 
      ${borderColor}
      bg-red-400 rounded-full ${fullWidth && 'w-full'} `}
      >
        {label}
        <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      </button>
    </div>
  );
};

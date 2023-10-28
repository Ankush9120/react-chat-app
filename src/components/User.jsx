import React from "react";

const User = ({ data , index}) => {
  return (
    <div className={`${index==0 && "selectedChat"} rounded-lg py-3 px-2 flex gap-3`}>
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="img"
          className="object-contain"
        />
      </div>

      <div className="flex-grow flex flex-col justify-center gap-1">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-base">{data.name}</span>
            <div
              className={`${
                data.active ? "bg-green-500" : "bg-red-600"
              } h-2 w-2 rounded-full`}
            ></div>
          </div>
          <span className="text-gray-500 text-xs">10:20 PM</span>
        </div>

        <div className="text-xs w-[220px] truncate">{data.message}</div>
      </div>
    </div>
  );
};

export default User;

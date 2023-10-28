import React from "react";
import SearchIcon from "../assets/icons/search.svg";
import LogoutIcon from "../assets/icons/logout.svg";
import User from "./User";

const UsersBar = () => {
  const userList = [
    {
      name: "Ankush Gupta",
      active: true,
      message: "hiii"
    },
    { name: "Raj Singh", active: false, message: "you okay ?" },
    { name: "Rohit Sinha", active: false, message: "everything seems good , there are still many things have to be done" },
    { name: "Om Shukla", active: true, message: "i am out" },
  ];

  return (
    <div className="userBar py-3 px-4 flex flex-col gap-4 w-[340px]">
      <div className="font-semibold text-lg flex justify-between items-center">
        <div>Chat <span className="text-yellow-300">!</span>O</div>
        <img src={LogoutIcon} className="h-6" alt="" />
      </div>
      <div className="flex justify-between p-2 border border-white border-opacity-50 rounded-lg">
        <input
          className="bg-transparent w-full px-2"
          placeholder="Search User"
          type="text"
        />
        <img className="h-5" src={SearchIcon} alt="" />
      </div>

      {userList.map((data,index) => {
        return <User data={data} index={index} />;
      })}
      {/* <div className="selectedChat rounded-lg p-3 flex gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="img"
            className="object-contain"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="text-base">Ankush Gupta</span>
            <div className="bg-green-500 h-2 w-2 rounded-full"></div>
            <span className="text-gray-500 text-xs">10:20 PM</span>
          </div>

          <span className="text-center text-xs">Message ...</span>
        </div>
      </div>

      <div className="rounded-lg p-3 flex gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="img"
            className="object-contain"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="text-base">Ankush Gupta</span>
            <div className="bg-green-500 h-2 w-2 rounded-full"></div>
            <span className="text-gray-500 text-xs">10:20 PM</span>
          </div>

          <span className="text-center text-xs">Message ...</span>
        </div>
      </div> */}
    </div>
  );
};

export default UsersBar;

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
        return <User data={data} index={index} key={index} />;
      })}
    </div>
  );
};

export default UsersBar;

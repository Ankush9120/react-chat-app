import React from "react";
const Dashboard = () => {
  return (
    <div className="flex justify-center h-screen text-white">

      {/* User Bar  */}
      <div className="userBar p-2 flex flex-col gap-2">

        <div className="selectedChat rounded-lg p-3 flex gap-3">
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
        </div>

      </div>

      {/* CHAT BOX 1 */}

      <div className="chatContainer flex flex-col w-2/5">
        <header className="bg-black p-3 px-4 mb-12">
          <span className="text-gray-400">Conversation with</span> Ankush Gupta
        </header>

        <div className="grow flex flex-col">
          {/* My Box */}
          <div className="bg-purple-500 w-64 p-4 text-right relative ml-auto mr-4 rounded-2xl rounded-br-none">
            <p>Hello !!</p>
            <div className="text-sm text-gray-300 absolute right-2 -top-8">
              10:34 PM
            </div>
          </div>

          {/* Senders Box  */}
          <div className="chatMessage w-64 p-4 ml-4 rounded-2xl rounded-tl-none relative mt-16">

            <div className="absolute w-full flex gap-2 items-center -top-10">

              <div className="h-7 w-7 rounded-full overflow-hidden">
                <img className="object-contain" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </div>

              <span className="text-xs text-gray-300">Ankush Gupta</span>

              <span className=" text-sm text-gray-300 ml-4">10:45 PM</span>
            </div>

            <p>Hello !!</p>

          </div>
        </div>

        <div className="flex w-full p-4 gap-2.5 items-center">
          <input
            type="text"
            placeholder="Enter message ..."
            className="inputBox border border-transparent focus:border-yellow-300 grow outline-none rounded-xl p-3"
          />
          <button className="bg-yellow-300 rounded-xl h-11 w-11 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

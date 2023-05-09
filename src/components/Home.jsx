import React from "react";
import { useUserAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {/* <div className="p-4 mt-3 text-center border border-gray-600">
        Hello Welcome
        <br />
        {user && user.displayName}
      </div>
      <div className="grid gap-2">
        <button className="p-3 bg-blue-600 text-white" onClick={handleLogOut}>
          Log Out
        </button>
      </div> */}
      <div className="navbar">
        <nav className="listItems p-3 shadow-xl flex justify-center items-center">
          <ul className="flex">
            <li className="mx-2 cursor-pointer font-serif text-lg text-blue-700 hover:underline">
              Home
            </li>
            <li className="mx-2 cursor-pointer font-serif text-lg text-blue-700 hover:underline">
              About
            </li>
            <li className="mx-2 cursor-pointer font-serif text-lg text-blue-700 hover:underline">
              Services
            </li>
            <li className="mx-2 cursor-pointer font-serif text-lg text-blue-700 hover:underline">
              ContactUs
            </li>
          </ul>
          <div className="flex w-1/2 justify-end">
            <span className="font-serif text-lg right-0 cursor-pointer text-orange-600 font-bold">
              {user && user.displayName ? user.displayName : user.email}
            </span>
          </div>
        </nav>
        {/* Alwin Work */}
      </div>
    </>
  );
};

export default Home;

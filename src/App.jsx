import React from "react";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-cyan-950 ">
        <div className="w-96 p-6 bg-white rounded-lg ">
          <h1 className="font-semibold text-center text-3xl ">Login</h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">Uasername</label>
            <input type="text" id="username" className="rounded-lg border w-full text-base px-2 py-1 focus:border-gray-600" placeholder="Enter Username..."/>
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">Password</label>
            <input type="text" id="password" className="rounded-lg  border w-full text-base px-2 py-1 focus:border-gray-600" placeholder="Enter Password..."/>
          </div>
          <div className="mt-3 flex justify-between item-center">
            <div>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div>
              <a href="#" className="text-blue-900 font-semibold">Forgot Password?</a>
            </div>
          </div>
          <div className="mt-5">
            <button type="submit" className="border-2 border-blue-900 bg-blue-900 text-white py-1 w-full rounded-lg " >Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

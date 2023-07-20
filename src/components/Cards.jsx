import React from "react";
import Test from "../assets/test.jpg";
const Cards = () => {
  return (
    <div>
      <div className="flex flex-col rounded-xl bg-slate-300 w-72 m-3 p-4">
        <div className="">
          <img src={Test} alt="" className="h-64 w-72 rounded-t-xl " />
        </div>
        <div>
          <h5 className="text-3xl font-medium">title</h5>
          <p className="text-lg ">description</p>
          <p>
            <small className="text-slate-500">date</small>
          </p>
          <button type="button" className="rounded-[10px] p-2 bg-blue-500 ">
            Read Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

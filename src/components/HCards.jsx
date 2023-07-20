import React from "react";
import Test from "../assets/test.jpg";

const HCards = () => {
  return (
    <div>
      <div className="flex flex-row rounded-xl bg-slate-300 w-full m-3 p-4 gap-5 ">
        <div className="">
          <img src={Test} alt="" className="w-96 h-72 rounded-l-xl " />
        </div>
        <div className="flex flex-col  justify-between">
          <div>
            <h5 className="text-3xl font-medium py-1">title</h5>
            <p className="text-lg py-1">description</p>
          </div>
          <div>
            <p className="text-slate-500 pb-2">
              <small>date</small>
            </p>

            <button type="button" className="rounded-[10px] p-2 bg-blue-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCards;

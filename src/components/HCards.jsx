import React from "react";
import Test from "../assets/test.jpg";

const HCards = (props) => {
  return (
    <div>
      <div className="flex flex-row rounded-xl bg-slate-300 w-full m-3 p-4 gap-5 ">
        <div className="">
          <img
            src={
              props.image
                ? props.image
                : "https://techcrunch.com/wp-content/uploads/2023/03/Dunzo_Google_Reliance.jpg?resize=1200,485"
            }
            alt=""
            className="max-w-70 h-72 rounded-l-xl "
          />
        </div>
        <div className="flex flex-col  justify-between">
          <div>
            <h5 className="text-3xl font-medium py-1">{props.title}...</h5>
            <p className="text-lg py-1">{props.desc}...</p>
          </div>
          <div>
            <p className="text-slate-500 pb-2">
              <small>date</small>
            </p>

            <button type="button" className="rounded-[10px] p-2 bg-blue-500">
              <a
                href={props.link}
                target="_blank"
                className={`text-slate-${props.mode === 50 ? 950 : 50}`}
              >
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCards;

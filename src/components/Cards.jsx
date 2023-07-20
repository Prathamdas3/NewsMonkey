import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div
        className={`flex flex-col rounded-xl bg-slate-300 max-w-96 m-3 p-4 gap-1`}
      >
        <div className="">
          <img
            src={
              props.image
                ? props.image
                : "https://techcrunch.com/wp-content/uploads/2023/03/Dunzo_Google_Reliance.jpg?resize=1200,485"
            }
            alt=""
            className="h-64 max-w-80 rounded-t-xl "
          />
        </div>
        <div>
          <h5 className="text-3xl font-medium pt-0.5">
            {props.title.slice(0, 45)}...
          </h5>
          <p className="text-lg py-0.5">
            {props.desc ? props.desc.slice(0, 88) : props.desc}...
          </p>
          <p className="py-2">
            <small className="text-slate-500">date</small>
          </p>
          <button type="button" className="rounded-[10px] p-2 bg-blue-500 ">
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
  );
};

export default Cards;

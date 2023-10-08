import React from "react";
import CardMenu from "../assets/cardMenu.png";
import CardMenuDark from "../assets/cardMenuDark.png";
import ListMenu from "../assets/listMenu.png";
import ListMenuDark from "../assets/listMenuDark.png";

const View = (props) => {
  return (
    <div
      className={`bg-slate-${
        props.mode === 50 ? 50 : 300
      } rounded-lg p-2 flex items-center gap-2`}
    >
      <button onClick={props.toggleCardStyle}>
        <img
          src={props.mode === 50 ? CardMenu : CardMenuDark}
          alt="card menu button"
        />
      </button>
      <button onClick={props.toggleListStyle}>
        <img
          src={props.mode === 50 ? ListMenu : ListMenuDark}
          alt="hamburger menu button"
        />
      </button>
    </div>
  );
};

export default View;

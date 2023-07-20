import React from "react";
import Light from "../assets/sun.svg";
import Dark from "../assets/moon.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardMenu from "../assets/cardMenu.png";
import CardMenuDark from "../assets/cardMenuDark.png";
import ListMenu from "../assets/listMenu.png";
import ListMenuDark from "../assets/listMenuDark.png";

const Navbar = (props) => {
  return (
    <nav>
      <div
        className={`flex flex-row justify-between items-center bg-slate-${
          props.theme === 50 ? 50 : 950
        } text-slate-${
          props.theme === 50 ? 950 : 50
        } p-4 border-b-[1px] border-slate-${props.theme === 50 ? 400 : 600}`}
      >
        <div>
          <Link className="btn text-xl " to="/">
            NewsMonkey
          </Link>
        </div>

        <div>
          <ul className="flex justify-around gap-3 items-center">
            <div
              className={`bg-slate-${
                props.theme === 50 ? 50 : 300
              } rounded-lg p-2 flex items-center gap-2`}
            >
              <button>
                <img
                  src={props.theme === 50 ? CardMenu : CardMenuDark}
                  alt="card menu button"
                />
              </button>
              <button>
                <img
                  src={props.theme === 50 ? ListMenu : ListMenuDark}
                  alt="hamburger menu button"
                />
              </button>
            </div>
            <li>
              <Link className="btn " to="/business">
                Business
              </Link>
            </li>
            <li>
              <Link className="btn " to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li>
              <Link className="btn " to="/health">
                Health
              </Link>
            </li>
            <li>
              <Link className="btn " to="/science">
                Science
              </Link>
            </li>
            <li>
              <Link className="btn " to="/sports">
                Sports
              </Link>
            </li>
            <li>
              <Link className="btn " to="/technology">
                Technology
              </Link>
            </li>
            <li>
              <button type="button">
                <img
                  src={props.theme === 50 ? Dark : Light}
                  alt="turn on light mode"
                  onClick={props.toggleTheme}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.PropsTypes = {
  theme: PropTypes.number,
};
Navbar.defaultProps = {
  theme: 50,
};

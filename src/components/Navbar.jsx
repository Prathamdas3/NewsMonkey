import React from "react";
import Light from "../assets/sun.svg";
import Dark from "../assets/moon.svg";
import PropTypes from "prop-types";
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
          <a className="btn text-xl ">NewsMonkey</a>
        </div>

        <div>
          <ul className="flex justify-around gap-3">
            <li>
              <a className="btn " href="/">
                business
              </a>
            </li>
            <li>
              <a className="btn " href="/">
                entertainment
              </a>
            </li>
            <li>
              <a className="btn " href="/">
                health
              </a>
            </li>
            <li>
              <a className="btn " href="/">
                science
              </a>
            </li>
            <li>
              <a className="btn " href="/">
                sports
              </a>
            </li>
            <li>
              <a className="btn " href="/">
                technology
              </a>
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

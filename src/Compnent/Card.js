import React from "react";
import Sdata from "./Sdata";

const Card = (props) => {
  return (
    <div className="border cards  flex flex-col  p-2 rounded-xl bg-slate-100 hover:bg-slate-300 m-2 shadow-xl border-red-400">
      <img
        src={props.imgsrc}
        alt="mypic"
        className="card_img  rounded-xl h-44    "
      />
      <div className="flex-1">
        <span className="card_category font-semibold text-lg p-5">
          {props.title}
        </span>
        <h3 className="card_title p-5 text-slate-900 font-bold">
          {props.sname}
        </h3>
        <a href={props.link} target="_blank" className="p-5">
          <button className=" hover:bg-green-700 border border-spacing-3 border-blue-400 p-3 rounded-xl bg-green-500 text-white">
            {" "}
            Watch Now{" "}
          </button>
        </a>
      </div>
    </div>
  );
};
export default Card;

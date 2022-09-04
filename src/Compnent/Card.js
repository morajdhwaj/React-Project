import React from "react";




const Card = (props) => {
  return (
  <> 
     <h1 className="font-bold text-xl bg-slate-700 text-center">{props.heading}</h1>
<div className="flex justify-center items-center ">
    <div className="card flex " >
      <div className="cards  flex  p-5">
        <img src={props.imgsrc} alt="mypic" className="card_img h-40 w-40 rounded-xl " />
        <div className="card_info">
          <span className="card_category font-semibold text-lg p-5">
            {props.title}</span>
          <h3 className="card_title p-5 font-bold">{props.sname}</h3>
          <a href={props.link} target="_blank" className="p-5">
            <button className= " border border-spacing-3 border-blue-400 p-3 rounded-xl bg-green-300 text-white"> Watch Now </button>
          </a>
        </div>
      </div>
    </div>
</div>
  </>




  )
}
export default Card
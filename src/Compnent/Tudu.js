import React from "react";

const Tudu = (props) => {
    console.log(props.completed)
    return(
        <div className="flex justify-center items-center flex-row pt-40">
            <div className=" border border-black            flex">
                <h1 className="">Id- {props.id}  </h1>
                <h1 className="">Title- {props.title} </h1>
                <h1 className="">Completed- {props.completed ? "yes" : "no"}</h1>

            </div>




        </div>




    )

}
export default Tudu
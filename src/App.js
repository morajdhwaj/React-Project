import { info } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Card from "./Compnent/Card";
import Header from "./Compnent/Header";
import Sdata from "./Compnent/Sdata";
import Tudu from "./Compnent/Tudu";
// const App = () => {
  // return(
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((info) => setData(info));
  // }, []);
  // return (
  //   <div className="bg-red-500">
  //     {data.map((info) => {
  //       return (
  //         <Tudu key={info.id}  title={info.title} completed={info.completed} />
  //       );
  //     })}
  //   </div>
  // );

  // const data = fetch("https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json")
  //                 .then(res => {
  //                   return res.json()
  //                 }).then(data => {
  //                   return data
  //                 })

  //                 console.log(data)

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(
      "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json"
    )
      .then(res => res.json())
      .then((movies) => console.log(movies.data));
  }, []);

  console.log(data);

     
     <div>
      <Header head=" Top Serires in Netflix" />

       <div className="grid grid-cols-6">
         {data.map((movie, i) => {
           return (
             <Card
               key={i}
              imgsrc={movie.poster}
               title={movie.title}
               sname={movie.directed_by}
               link={movie.url}
             />
           );
         })}
       </div>

  
     <Card
        imgsrc = {Sdata[1].imgsrc}
        title = {Sdata[1] .title}
        sname = {Sdata[1].sname}
        link = { Sdata[1].link}
       />
        
        <Card
        imgsrc = {Sdata[2].imgsrc}
        title = {Sdata[2] .title}
        sname = {Sdata[2].sname}
        link = {Sdata[2].link}
        /> 

       <Card
        imgsrc = {Sdata[3].imgsrc}
        title = {Sdata[3] .title}
        sname = {Sdata[3].sname}
        link = {Sdata[3].link}
        />
     
       <Card
        imgsrc = {Sdata[4].imgsrc}
        title = {Sdata[4] .title}
        sname = {Sdata[4].sname}
        link = {Sdata[4].link}
        /> 

    </div>
   );
};
export default App;

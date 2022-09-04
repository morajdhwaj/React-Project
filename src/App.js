import React from "react";
import Card from "./Compnent/Card";

const App = () => {
  return(
    <div>
       

      <Card 
        imgsrc="https://i.pinimg.com/236x/5b/91/09/5b91096194b2af936efb117aaf1287d8.jpg"
        title="A Netflix Original Series"
        sname ="Dark"
        link ="https://www.netflix.com/in/"
       />
     <Card 
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOWfmN56sLj-zOR6uiHNYSULZZMrhnw-7y-0C5hvkgp_tuiwOG9CDZO4hHpCaon_VyTo&usqp=CAU"
        title="A Netflix Original Series"
        sname ="Extra Curricular"
        link ="https://www.netflix.com/in/"
       />
       <Card 
        imgsrc="https://img.youtube.com/vi/_73MRQSGO1w/hqdefault.jpg"
        title="A Netflix Original Series"
        sname ="Starnger Things"
        link ="https://www.netflix.com/in/"
       />
       



    </div>

  )

}  
export default App
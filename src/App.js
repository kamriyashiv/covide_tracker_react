
import { useEffect, useState } from "react";
import Card from "./Components/Cards";
import "./App.css";
function App(){
  const [state, Upstate]=useState([]);
  function  CovidData(){
     fetch("https://data.covid19india.org/data.json").then((Response)=>{
       return Response.json();
     }).then((data)=>{
        Upstate(data.statewise[0]);
     });
  }
  useEffect(()=>{
    CovidData();
    },[]);
  return<>
      <h1>Covid Live Tracker App</h1>
      <div className="mainBox">          
          <ul>
            <Card name={"Covid Covid Live DataLive Data"} data={"INDIA"} subName={"All State"}/> 
            <Card name={"Active"} data={"INDIA"} subName={"All State"}/>
            <Card name={"confirmed"} data={state.active} subName={"All State"}/>
            <Card name={"deaths"} data={state.confirmed} subName={"All State"}/>
            <Card name={"recovered"} data={state.recovered} subName={"All State"}/>
            <Card name={"lastupdatedtime"} data={state.lastupdatedtime} subName={"All State"}/>           
          </ul>
      </div>
  </>
}

export default App;
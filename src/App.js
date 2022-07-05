import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Review from "./page/Review";
import { useEffect } from "react";

function App() {

  const weeks = [
    { day: "월", rate: 0 },
    { day: "화", rate: 0 },
    { day: "수", rate: 0 },
    { day: "목", rate: 0 },
    { day: "금", rate: 0 },
    { day: "토", rate: 0 },
    { day: "일", rate: 0 },
  ];

  const weeksSet = () =>{
    weeks.map((week) =>{
      week.rate = Math.floor(Math.random()*5);
    })
  }

  useEffect( () =>{
    weeksSet();
  },[]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main weeks={weeks}/>} />
        <Route path="/review/:day" element={<Review weeks={weeks}/>} />
      </Routes>
    </div>
  );
}

export default App;

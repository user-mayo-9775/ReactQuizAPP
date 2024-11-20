import { useEffect, useState } from "react";

function RecentActivity(){
const[allativitiy,setactivity]=useState([])
  
   
  const alldata = JSON.parse(localStorage.getItem("recentactivity"));
    useEffect(() => {
    
     
      if (alldata) {
    
        setactivity( [...allativitiy, ...alldata]);
      }
    }, []); 
    console.log("the all locals dat is",alldata)
  
    console.log("the my activiy is here ",allativitiy)
    

    

    return<>

<div className="w-[72vw] h-[auto] border border-blue-300 mx-auto my-6 rounded-xl">
        <h1 className='text-lg text-white font-semibold text-stone-950 text-center my-4'>
          Recent Activity 
          <div>
            <span className="inline-block h-1 w-28 rounded bg-indigo-500 mb-4 text-center"></span>
          </div>
        </h1>
        <div>
        
        {alldata.map((item, index) => (
          <div key={index}>
            <p className="text-white">category:{item.catagery}</p>
            <p className="text-white">Correct Answers: {item.correctAnswers}</p>
            <p className="text-white">Incorrect Answers: {item.incorrectAnswers}</p>
          </div>
        ))}
      </div>
      </div>
    </>


}
export default RecentActivity;
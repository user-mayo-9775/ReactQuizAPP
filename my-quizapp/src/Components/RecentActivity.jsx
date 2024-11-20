import { useEffect, useState } from "react";
function RecentActivity(){
const[allativitiy,setactivity]=useState([])
  const[count,setcount]=useState()
   
  const alldata = JSON.parse(localStorage.getItem("recentactivity"));
    useEffect(() => {
    
     
      if (alldata) {
    
        setactivity( [...allativitiy, ...alldata]);
      }
    }, []); 
  
    console.log("the my activiy is here ",allativitiy)
    

    

    return<>

<div className="w-[80vw] h-[50vh] border border-blue-300 mx-auto my-0 rounded-xl">
        <h1 className='text-lg font-semibold text-stone-950 text-center my-4'>
          Recent Activity 
          <div>
            <span className="inline-block h-1 w-28 rounded bg-indigo-500 mb-4 text-center"></span>
          </div>
        </h1>
        <div>
        
        {allativitiy.map((item, index) => (
          <div key={index}>
            <p>category:{item.catagery}</p>
            <p>Correct Answers: {item.correctAnswers}</p>
            <p>Incorrect Answers: {item.incorrectAnswers}</p>
          </div>
        ))}
      </div>
      </div>
    </>


}
export default RecentActivity;
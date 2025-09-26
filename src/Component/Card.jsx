import React from 'react';

const Card = ({issue,data,setData}) => {

    // console.log(issue.ticketId);
    const handleClick = () =>{
        const currentData = data.find((ele) => ele.ticketId === issue.ticketId);

        if(currentData.status === "Pending"){
            currentData.status = "Submitted";
        }else if(currentData.status === "Submitted"){
            currentData.status = "Reviewed";
        }

        const restData = data.filter((ele) => ele.ticketId !== issue.ticketId);

        console.log({restData ,currentData});
        setData([currentData,...restData])
        
        // const currentData = data.find
    }
    return (
        <div onClick={handleClick} className="shadow-md bg-slate-100 rounded-lg cursor-pointer p-3 space-y-2">
            <div>
              <img src={issue.userImg} alt={issue.requestedBy} title={issue.requestedBy} className="w-15 rounded-full" />
              <h2 className="font-semibold text-md">{issue.requestedBy}</h2>
            </div>
              <div className="flex justify-between items-center">
                <h2 className="text-[23px] font-bold">{issue.subject}</h2>
                <div className="flex">
                  <span 
                  className={`px-2 py-1 font-semibold rounded-md shadow mr-2 ${issue.priority === "High" ? "text-red-500 bg-red-100" : issue.priority === "Medium" ? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"}`}>{issue.priority}</span>

                  <span 
                  className={`px-2 py-1 font-semibold rounded-md shadow mr-2 ${issue.status === "Pending" ? "text-red-500 bg-red-100" : issue.status === "Submitted" ? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"}`}>{issue.status}</span>
                </div>
              </div>
            <h2 className="text-sm text-gray-500">{issue.description}</h2>
        </div>
    );
};

export default Card;
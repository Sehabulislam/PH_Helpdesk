import { use, useState } from "react";
import Container from "./Container";
import Card from "./Card";
import ToggleBtn from "./ToggleBtn";
import CountBox from "../CountBox";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const filteredData = 
      (toggleStatus === "All" ? data : data.filter((element) => element.status === toggleStatus));
  // console.log(filteredData);

  return (
    <div>
      {/* Box */}
      <CountBox data={data}></CountBox>
      
      {/* Toggle buttons */}
      <ToggleBtn
       toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}></ToggleBtn>

      {/* Cards */}
          <div className="grid grid-cols-3 gap-[12px] mb-6">
            {filteredData.map(issue => {
              // console.log(issue);
              return (
                <Card key={issue.ticketId} issue={issue} data={data} setData={setData} />
              );
            })}
          </div>
    </div>
  );
};

export default IssuesManagement;
import React from "react";
import Container from "./Container";

const ToggleBtn = ({ toggleStatus, setToggleStatus }) => {

    const btns = ["All","Pending","Submitted","Reviewed"]
  return (
    <Container>
      <div className="text-right mb-6">
        {
            btns.map((btn,index) => {
                // console.log(btn);
                return (
                    <button
                    key={index}
                    onClick={() => setToggleStatus(btn)}
                    className={`toggle-btn ${index === 0 && "rounded-l-xl"} ${index === 3 && "rounded-r-xl"} ${
                        toggleStatus === btn && "!bg-purple-500 !text-white"}`}>{btn}</button>
                )
            })
        }
        {/* <button
          onClick={() => setToggleStatus("All")}
          className={`toggle-btn rounded-l-xl ${
            toggleStatus === "All" && "!bg-purple-500 !text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setToggleStatus("Pending")}
          className={`toggle-btn ${
            toggleStatus === "Pending" && "!bg-purple-500 !text-white"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setToggleStatus("Submitted")}
          className={`toggle-btn ${
            toggleStatus === "Submitted" && "!bg-purple-500 !text-white"
          }`}
        >
          Submitted
        </button>
        <button
          onClick={() => setToggleStatus("Reviewed")}
          className={`toggle-btn rounded-r-xl ${
            toggleStatus === "Reviewed" && "!bg-purple-500 !text-white"
          }`}
        >
          Reviewed
        </button> */}
      </div>
    </Container>
  );
};

export default ToggleBtn;

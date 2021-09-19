import React from "react";
import offlight from "./Images/offbulb.png";

const LightOnOff = () => {
  return (
    <>
      <div className="container">
        <h1>Can you turn on the light?</h1>
        <img src={offlight} className="lightimg" alt="" />
        <div className="btn_div">
          <button className="btn btnOff">Light Off</button>
          <button className="btn btnOn">Light On</button>
        </div>
      </div>
    </>
  );
};

export default LightOnOff;

import React from "react";
import "../ecommerceproject/cart.css";
import "../ecommerceproject/bynow.css";
import { useNavigate } from "react-router-dom";
import Bnavbar from "./navbar/Bnavbar";

const Bynow = () => {
  const navigate = useNavigate();
  return (
    <>
      <Bnavbar></Bnavbar>
      {/* <div className="containeru">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter"> your order is placed</h3>
          </div>
        </div>
      </div> */}
      <div className="containeru">
        <div className="your">your order</div>
        <div className="your">
          <span> is placed</span>
        </div>
      </div>
      <div className="scene" id="butn" onClick={() => navigate("/dashbord")}>
        <div className="cube">
          <span className="side front ">Search more product</span>
          <span className="side top">thank you for purchasing </span>
        </div>
      </div>
    </>
  );
};

export default Bynow;

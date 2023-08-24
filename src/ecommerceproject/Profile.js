import React from "react";
import "../ecommerceproject/profile.css";
import sarath from "../projectimg/sarathh.jpg";
const Profile = () => {
  return (
    <>
      <div className="profcont">
        <div id="imgbox">
          <img src={sarath} id="img" />
        </div>
        <div className="namediv ">
          <lable className="lableprofile">Name</lable>
          <span>
            <h5 className="cont">sarath</h5>
          </span>
          <lable className="lableprofile">Email</lable>
          <span>
            <h5 className="cont">vsarath0022@gmail.com</h5>
          </span>
        </div>
        <div className="addressbar">
          <lable className="lableprofile">Address</lable>
          <p className="cont">
            15/43d,vaishnavi garden,
            <br /> TNEB back side,
            <br /> panagudi.
          </p>

          <lable className="lableprofile">PinCode</lable>
          <p className="cont">627109</p>
        </div>
      </div>
    </>
  );
};

export default Profile;

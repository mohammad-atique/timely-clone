import React from "react";
import "../CSS/Sidebar.css";
import { AiFillClockCircle, AiFillDollarCircle } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import {
  BsFillBagFill,
  BsPeopleFill,
  BsBarChartFill,
  BsPlugFill,
  BsAlarmFill,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="imgdiv">
          <img
            className="logoimg"
            src="https://d1vbcromo72rmd.cloudfront.net/assets/account_thumbs/account_medium_retina-10dfbcc6733ccba1d485971f63c5eb7f9b7ed1a942a0ebd140e292bcb1e4dbea.png"
            alt="logoimg"
          />
        </div>
        <div className="logos">
          <AiFillClockCircle size={20} />
          <p>HOURS</p>
        </div>
        <div className="logos">
          <BiTask size={20} />
          <p>TASKS</p>
        </div>
        <div className="logos">
          <BsFillBagFill size={20} />
          <p>PROJECTS</p>
        </div>
        <div className="logos">
          <BsPeopleFill size={20} />
          <p>PEOPLE</p>
        </div>
        <div className="logos">
          <BsBarChartFill size={20} />
          <p>REPORTS</p>
        </div>
        <div className="logos">
          <AiFillDollarCircle size={20} />
          <p>INVOICE</p>
        </div>
        <div className="logos">
          <BsPlugFill size={20} />
        </div>
        <div className="logos">
          <BsAlarmFill style={{ marginBottom: "20px" }} size={18} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

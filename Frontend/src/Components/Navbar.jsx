import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "../CSS/Navbar.css";
import {
  RiTimerFlashLine,
  RiTeamLine,
  RiBarChartHorizontalFill,
  RiCropLine,
  RiLock2Line,
  RiHotelLine,
  RiComputerLine,
  RiSurveyFill,
  RiShape2Fill,
  RiWebcamLine,
  RiFileSettingsLine,
  RiBriefcase2Line,
  RiBriefcase5Line,
} from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { FaBlogger, FaPodcast } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="primenavbar">
      <div className="navbar">
        <div>
          <img
            className="logoimg"
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39955aef8af720_timely-new-logo.svg"
            alt="Timely"
          />
        </div>
        <div className={`navitems ${isopen && `open`}`}>
          <div className="mydiv">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "#7133ca",
                  border: "none",
                  fontSize: "15px",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Features
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiTimerFlashLine size={25} />
                    <p>Track time</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <TbCalendarTime size={25} />
                    <p>Track projects</p>
                  </div>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiTeamLine size={25} />
                    <p>Track teams</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiBarChartHorizontalFill size={25} />
                    <p>Track plans</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiCropLine size={25} />
                    <p>Integration</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiLock2Line size={25} />
                    <p> Our privacy policy</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="mydiv">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "#7133ca",
                  border: "none",
                  fontSize: "15px",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Solutions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiHotelLine size={25} />
                    <p>Consulting firms</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiComputerLine size={25} />
                    <p>Software firms</p>
                  </div>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiSurveyFill size={25} />
                    <p>Agencies</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiShape2Fill size={25} />
                    <p>Designers & creatives</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <GoLaw size={25} />
                    <p>Lawyers</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiBriefcase2Line size={25} />
                    <p> Accounts</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mydiv">
            <Button
              style={{
                backgroundColor: "#7133ca",
                border: "none",
                fontSize: "15px",
              }}
              variant="primary"
            >
              Pricing
            </Button>{" "}
          </div>
          <div className="mydiv">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "#7133ca",
                  border: "none",
                  fontSize: "15px",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Resources
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <FaBlogger size={25} />
                    <p>Blog</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiBriefcase5Line size={25} />
                    <p>Case study</p>
                  </div>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-1">
                  <div>
                    <FaPodcast size={25} />
                    <p>Podcast</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <GiBookshelf size={25} />
                    <p>Books</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiWebcamLine size={25} />
                    <p>Webinars</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <div>
                    <RiFileSettingsLine size={25} />
                    <p> Support</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mydiv">
            <Button
              style={{
                backgroundColor: "#7133ca",
                border: "none",
                fontSize: "15px",
              }}
              variant="primary"
            >
              <div>Log in </div>
            </Button>{" "}
          </div>
          <div className="mydiv">
            <Button
              style={{ backgroundColor: "darkblue", border: "none" }}
              variant="primary"
            >
              Start 14-day free trial
            </Button>{" "}
          </div>
          <div className="mydiv">
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399514908af72d_made-by-white.svg"
              alt="Made by Memory"
            />
          </div>
        </div>
      </div>
      <div
        className={`navtoggle ${isopen && `open`} `}
        onClick={() => setIsopen(!isopen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

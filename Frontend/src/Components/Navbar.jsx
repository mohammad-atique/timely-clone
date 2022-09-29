import React from "react";
import styles from "../CSS/Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
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

const Navbar = () => {
  return (
    <div>
      <div className={styles.navback}>
        <div className={styles.logodiv}>
          <img
            className={styles.logoimg}
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39955aef8af720_timely-new-logo.svg"
            alt="Timely"
          />
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#7133ca", border: "none" }}
              variant="success"
              id="dropdown-basic"
            >
              Features
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiTimerFlashLine size={25} />
                  <p className={styles.dropp}>Track time</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <TbCalendarTime size={25} />
                  <p className={styles.dropp}>Track projects</p>
                </div>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiTeamLine size={25} />
                  <p className={styles.dropp}>Track teams</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiBarChartHorizontalFill size={25} />
                  <p className={styles.dropp}>Track plans</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiCropLine size={25} />
                  <p className={styles.dropp}>Integration</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiLock2Line size={25} />
                  <p className={styles.dropp}> Our privacy policy</p>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* //////////////////////////////////////////
        ////////////////////////////////////////////
        //////////////////////////////////////////
        ///////////////////////////////////// */}
        <div>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#7133ca", border: "none" }}
              variant="success"
              id="dropdown-basic"
            >
              Solutions
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiHotelLine size={25} />
                  <p className={styles.dropp}>Consulting firms</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiComputerLine size={25} />
                  <p className={styles.dropp}>Software firms</p>
                </div>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiSurveyFill size={25} />
                  <p className={styles.dropp}>Agencies</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiShape2Fill size={25} />
                  <p className={styles.dropp}>Designers & creatives</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <GoLaw size={25} />
                  <p className={styles.dropp}>Lawyers</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiBriefcase2Line size={25} />
                  <p className={styles.dropp}> Accounts</p>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Button
            style={{ backgroundColor: "#7133ca", border: "none" }}
            variant="primary"
          >
            Pricing
          </Button>{" "}
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#7133ca", border: "none" }}
              variant="success"
              id="dropdown-basic"
            >
              Resources
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <FaBlogger size={25} />
                  <p className={styles.dropp}>Blog</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiBriefcase5Line size={25} />
                  <p className={styles.dropp}>Case study</p>
                </div>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <FaPodcast size={25} />
                  <p className={styles.dropp}>Podcast</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <GiBookshelf size={25} />
                  <p className={styles.dropp}>Books</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiWebcamLine size={25} />
                  <p className={styles.dropp}>Webinars</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className={styles.droplogo}>
                  <RiFileSettingsLine size={25} />
                  <p className={styles.dropp}> Support</p>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Button
            style={{ backgroundColor: "#7133ca", border: "none" }}
            variant="primary"
          >
            <div className={styles.droplogo}>Log in </div>
          </Button>{" "}
        </div>
        <div>
          <Button className={styles.trialbtn} variant="primary">
            Start 14-day free trial
          </Button>{" "}
        </div>
        <div className={styles.memimg}>
          <img
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399514908af72d_made-by-white.svg"
            alt="Made by Memory"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

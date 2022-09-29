import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../CSS/HomePage.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiTimerFlashLine, RiTeamLine } from "react-icons/ri";
import { TbCalendarStats } from "react-icons/tb";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* Topsection
      /////////////////////////////////////
      //////////////////////////////////
      //////////////////////////////////////// */}

      <div className={styles.topsection}>
        <div className={styles.topone}>
          <h1 className={styles.topone1}>
            <span className={styles.topone11}>Timely</span> time tracking
            software
          </h1>
          <h2 className={styles.topone2}>
            Say hello to{" "}
            <span className={styles.topone21}>automatic time tracking</span>
          </h2>
          <p className={styles.topone3}>
            Timely automates compant time tracking, so you and your team can
            focus on the work that matters{" "}
          </p>
          <div>
            <InputGroup className="mb-3">
              <Form.Control
                className={styles.topone4}
                placeholder="Enter your work email"
                aria-label="Enter your work email"
                aria-describedby="basic-addon2"
              />
              <Button
                style={{ color: "white", backgroundColor: "darkblue" }}
                variant="outline-secondary"
                id="button-addon2"
              >
                Start my free trial
              </Button>
            </InputGroup>
          </div>
          <div>
            <div className={styles.topone5}>
              <img
                src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg"
                alt="trusted"
              />
              <p className={styles.topone51}>
                {" "}
                Trusted by 5000+ businesses globally
              </p>
            </div>
            <div className={styles.topone5}>
              <img
                src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg"
                alt="trusted"
              />
              <p className={styles.topone51}>
                {" "}
                Free 14-day trial-No credit cards needed
              </p>
            </div>
            <div className={styles.topone5}>
              <img
                src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg"
                alt="trusted"
              />
              <p className={styles.topone51}>
                {" "}
                Reduce time tracking admin by 75%
              </p>
            </div>
          </div>
        </div>
        <div className={styles.toptwo}>
          <img
            className={styles.topimg}
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.webp"
            alt="HelloImg"
          />
        </div>
      </div>
      {/* mid section homepage
      /////////////////////////
      ////////////////////////////
      ////////////////////////////// */}
      <div className={styles.midsection}>
        <div>
          <img
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39954ae48af5bf_brainp.svg"
            alt="Automate"
          />
        </div>
        <div className={styles.midtwo}>
          <h1>Automate your time tracking</h1>
        </div>
        <div className={styles.midthree}>
          <p>
            Forget timers, note taking and manual input—Timely can track time
            spent in every web and desktop app automatically for you. Get a
            precise daily record of all the time you spend in documents,
            meetings, emails, websites and video calls with zero effort. It’s
            all 100% private to you.
          </p>
        </div>
        <div className={styles.midfour}>
          <p>How it all works</p>
        </div>
        <div>
          <img
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951ee48af5c4_arr.svg"
            alt="ConnectMe"
          />
        </div>
        <div className={styles.midfive}>
          <div className={styles.midfive1}>
            <RiTimerFlashLine size={30} className={styles.midfive11} />
            <h1 className={styles.midfive12}>Track time</h1>
            <p className={styles.midfive13}>
              Get the complete picture of your work day with zero effort.
            </p>
            <p className={styles.midfive14}>Automate time tracking</p>
          </div>
          <div className={styles.midfive1}>
            <TbCalendarStats size={30} className={styles.midfive11} />
            <h1 className={styles.midfive12}>Track Projects</h1>
            <p className={styles.midfive13}>
              Monitor budgets, hours and activities in real time.
            </p>
            <p className={styles.midfive14}>Run smarter projects</p>
          </div>
          <div className={styles.midfive1}>
            <RiTeamLine size={30} className={styles.midfive11} />
            <h1 className={styles.midfive12}>Track teams</h1>
            <p className={styles.midfive13}>
              Get a complete overview of your teams time and performance.
            </p>
            <p className={styles.midfive14}>Lead happier teams</p>
          </div>
        </div>
        <div className={styles.middown}>
          <div>
            <video src="https://m5y.s3.eu-west-1.amazonaws.com/people.mp4">
              Save hours
            </video>
          </div>
          <div>
            <h1>Save hours on time tracking</h1>
            <p>
              Timely’s simple UI and automatic time tracking have helped other
              companies reduce timesheet admin by 75%. With flexible options for
              logging time, your team can manage timesheets in the way that
              makes most sense to them.
            </p>
          </div>
          <div>
            <h1>Capture every billable detail</h1>
            <p>
              By capturing every second of your work day, Timely stops billable
              time from falling through the cracks. Report and invoice clients
              transparently, and use accurate company time data to improve
              project rates and budgets.
            </p>
          </div>
          <div>
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ed7f0de764464efc1bda_Frame%201340.webp"
              alt="details"
            />
          </div>
          <div>
            <video src="https://m5y.s3.eu-west-1.amazonaws.com/people.mp4">
              Empower people
            </video>
          </div>
          <div>
            <h1>Empower your people</h1>
            <p>
              Timely’s gorgeous design, intuitive controls and fierce protection
              of individual privacy make it a time tracking tool that people
              actually enjoy using. Empower your team to manage their own
              productivity, and stay on top of performance, wellbeing and
              workload without compromising anyone’s trust
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

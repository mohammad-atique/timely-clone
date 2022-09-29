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
            <video
              className={styles.midimg}
              src="https://m5y.s3.eu-west-1.amazonaws.com/people.mp4"
            >
              Save hours
            </video>
          </div>
          <div>
            <h1 className={styles.midh1}>Save hours on time tracking</h1>
            <p className={styles.midp}>
              Timely’s simple UI and automatic time tracking have helped other
              companies reduce timesheet admin by 75%. With flexible options for
              logging time, your team can manage timesheets in the way that
              makes most sense to them.
            </p>
          </div>
          <div>
            <h1 className={styles.midh1}>Capture every billable detail</h1>
            <p className={styles.midp}>
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
            <video
              className={styles.midimg}
              src="https://m5y.s3.eu-west-1.amazonaws.com/people.mp4"
            >
              Empower people
            </video>
          </div>
          <div>
            <h1 className={styles.midh1}>Empower your people</h1>
            <p className={styles.midp}>
              Timely’s gorgeous design, intuitive controls and fierce protection
              of individual privacy make it a time tracking tool that people
              actually enjoy using. Empower your team to manage their own
              productivity, and stay on top of performance, wellbeing and
              workload without compromising anyone’s trust
            </p>
          </div>
        </div>
      </div>
      {/* ///////////////////////
        connect your stack image
        //////////////////////// */}
      <div className={styles.connimgdiv}>
        <div>
          <img
            className={styles.logoimg}
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/625c168b07e04cf345cd2b3d_tm-arrow-wh.svg"
            alt="Logoimg"
          />
        </div>
        <div>
          <h1 className={styles.connh1}>Connect your stack</h1>
        </div>
        <div>
          <p className={styles.connp}>
            Timely’s native integrations and open APIs let you easily connect
            data across you existing digital toolkit. Enjoy modern, automatic
            time tracking without changing workflows you’ve spent years
            perfecting.
          </p>
        </div>
        <div className={styles.logogrid}>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399507178afec0_622f69e00c9cf281783c6e63_60b773d26388125af692655e_zoom.png"
              alt="zoom"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995db068afecb_622f69e00c9cf2a3aa3c6e5c_60b773d26388128ce29265e3_zapier.png"
              alt="isWhite"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995d48d8afec2_622f69e00c9cf228763c6e5f_60b773d263881212a3926561_trello.png"
              alt="img3"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39959cb08b0389_622f69e00c9cf20e073c75c5_toggl.svg"
              alt="img4"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399551b88afec9_622f69e00c9cf211c53c6e61_60b773d26388125fe3926566_todois.png"
              alt="img5"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39952c128afec1_622f69e00c9cf20fcd3c6e5d_60b773d2638812c090926634_quickbooks_logo.png"
              alt="img6"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995f1728afec3_622f69e00c9cf219633c6e62_60b773d26388126112926555_outlook.png"
              alt="img7"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995366e8afec5_622f69e00c9cf23dd63c6e5b_60b773d2638812391092655c_office365.png"
              alt="img8"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39955cba8afec8_622f69e00c9cf266013c6e5e_60b773d263881204bd92656c_jira.png"
              alt="img9"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399594708afead_622f69e00c9cf215b73c6e44_60b773d2638812a08e92656f_harvest.png"
              alt="img10"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399543808afeae_622f69e00c9cf22e8d3c6e48_60b773d26388128342926559_calendar.png"
              alt="img11"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399530e28afebb_622f69e00c9cf223073c6e4c_60b773d2638812105d926556_gmail.png"
              alt="img12"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399545b18afea6_622f69e00c9cf271b93c6e46_60b773d26388129bba926569_github.png"
              alt="img13"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39954a888afeac_622f69e00c9cf27e7c3c6e43_60b773d263881215e6926573_azuread.png"
              alt="img14"
            />
          </div>
          <div className={styles.logos}>
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399535d98afeaf_622f69e00c9cf262c83c6e47_60b773d2638812deaf926564_asana.png"
              alt="img16"
            />
          </div>
        </div>
        <div className={styles.seeinte}>see integration</div>
      </div>
    </div>
  );
};

export default HomePage;

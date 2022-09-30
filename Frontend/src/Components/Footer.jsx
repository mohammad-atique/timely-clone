import React from "react";
import { BsDot, BsFacebook, BsTwitter } from "react-icons/bs";
import styles from "../CSS/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div>
            <img
              className={styles.left1}
              src="https://assets-global.website-files.com/622f69e00c9cf2599f3c60d5/62556ba13d84b67cea42af8a_made-by-dark.svg"
              alt="MadebyMemory"
            />
          </div>
          <div className={styles.left2}>
            <div>
              <img
                className={styles.left21}
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"
                alt="1"
              />
            </div>
            <div>
              <img
                className={styles.left21}
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg"
                alt="2"
              />
            </div>
            <div>
              <img
                className={styles.left21}
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"
                alt="3"
              />
            </div>
            <div>
              <img
                className={styles.left21}
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg"
                alt="4"
              />
            </div>
          </div>
          <div>
            <button className={styles.left3}>Start my free trial</button>
          </div>
          <div className={styles.left4}>Get Timely on every device</div>
          <div className={styles.left5}>
            <div>
              <img
                className={styles.left51}
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951e1d8af644_App%20Store%20-%20eng.svg"
                alt="appstore"
              />
            </div>
            <div>
              <img
                className={styles.left51}
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39950b828af639_Google%20Play%20-%20eng.svg"
                alt="play store"
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h1 className={styles.righth1}>Features</h1>
            <p className={styles.rightp}>Time track</p>
            <p className={styles.rightp}>Track projects</p>
            <p className={styles.rightp}>Track teams</p>
            <p className={styles.rightp}>Track plans</p>
            <p className={styles.rightp}>Our privacy policy</p>
          </div>
          <div>
            <h1 className={styles.righth1}>Solutions</h1>
            <p className={styles.rightp}>Consulting firms</p>
            <p className={styles.rightp}>Software Companies</p>
            <p className={styles.rightp}>Agencies</p>
            <p className={styles.rightp}>Designers & Creatives</p>
            <p className={styles.rightp}>Lawyers</p>
            <p className={styles.rightp}>Teams</p>
          </div>
          <div>
            <h1 className={styles.righth1}>Resources</h1>
            <p className={styles.rightp}>Blog</p>
            <p className={styles.rightp}>Case Studies</p>
            <p className={styles.rightp}>Podcast</p>
            <p className={styles.rightp}>Webinars</p>
            <p className={styles.rightp}>Timetracking guide</p>
            <p className={styles.rightp}>Support</p>
          </div>
          <div>
            <h1 className={styles.righth1}>Integration</h1>
            <p className={styles.rightp}>Google Calender</p>
            <p className={styles.rightp}>Outlook</p>
            <p className={styles.rightp}>QuickBooks</p>
            <p className={styles.rightp}>Zapier</p>
            <p className={styles.rightp}>See all integrations</p>
          </div>
          <div>
            <h1 className={styles.righth1}>Compare</h1>
            <p className={styles.rightp}>TimelyVsRescurTime</p>
            <p className={styles.rightp}>TimelyVsTSheet</p>
            <p className={styles.rightp}>TimelyVsClockify</p>
            <p className={styles.rightp}>TimelyVsToggl</p>
          </div>
          <div>
            <h1 className={styles.righth1}>About Memory</h1>
            <p className={styles.rightp}>About us</p>
            <p className={styles.rightp}>Jobs-We're hiring</p>
            <p className={styles.rightp}>Manifesto</p>
            <p className={styles.rightp}>Download our apps</p>
            <p className={styles.rightp}>API Docs</p>
            <p className={styles.rightp}>Memory app</p>
            <p className={styles.rightp}>Contact us</p>
            <p className={styles.rightp}>SiteMap</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div style={{ display: "flex" }}>
          <BsDot size={20} />
          <p style={{ textDecoration: "underline" }}>Terms of services</p>
        </div>
        <div style={{ display: "flex" }}>
          <BsDot size={20} />
          <p style={{ textDecoration: "underline" }}>Privacy Policy</p>
        </div>
        <div style={{ display: "flex" }}>
          <BsDot size={20} />
          <p style={{ textDecoration: "underline" }}>Login</p>
        </div>
        <div style={{ display: "flex" }}>
          <BsDot size={20} />
          <p style={{ textDecoration: "underline" }}>Start 14-day trial</p>
        </div>
        <div style={{ display: "flex" }}>
          <BsDot size={20} />
          <BsTwitter size={25} />
        </div>
        <div style={{ display: "flex" }}>
          <BsDot size={20} />
          <BsFacebook size={25} />
        </div>
        <div style={{ display: "flex" }}>
          <p>Copyright 2022 Memory AS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

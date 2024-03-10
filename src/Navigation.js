import React, { useEffect, useState } from "react";
import { generateClient } from "@aws-amplify/api";
import { getSites } from "./graphql/queries";
// import "./Building.css";
import image11 from "./Assets/images/building.png";
import image10 from "./Assets/images/trane.png";
import image12 from "./Assets/images/building1.svg";
import image13 from "./Assets/images/spaces.svg";
import image14 from "./Assets/images/chiller.svg";
import image15 from "./Assets/images/airhandler1.svg";
import image16 from "./Assets/images/generic1.svg";
import image17 from "./Assets/images/system1.svg";
import { useHistory ,useLocation} from "react-router-dom";
 
const client = generateClient();
 
const Navigation = () => {
  const [expandedSites, setExpandedSites] = useState([]);
  const [siteData, setSiteData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();
  const location =useLocation();
  const CurrentSiteName=new URLSearchParams(location.search).get("SiteName")
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.graphql({ query: getSites });
        setSiteData(result.data.getSites);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
 
  const handleToggleExpand = (siteID) => {
    setExpandedSites((prevExpandedSites) =>
      prevExpandedSites.includes(siteID)
        ? prevExpandedSites.filter((id) => id !== siteID)
        : [...prevExpandedSites, siteID]
    );
  };
 
  const redirect1 = (SiteName,SiteID) => {
    history.push(`/ObjectFamily/${SiteID}?SiteName=${encodeURIComponent(SiteName)}`);
  };
 
  const redirecttobuilding=()=>{
    history.push("/");
  }
  return (
    <div className="left-panel">
      <div className="backgroundcolor1">
        <div className="image-container">
          <img src={image10} alt="trane" className="box" />
        </div>
        <h2 className="text">Tracer ® Ensemble™</h2>
        <img src={image11} alt="building" className="box1" />
 
        <h2 className="text1" onClick={redirecttobuilding}  style={{ cursor: "pointer" }} >All Buildings</h2>
        <div className="button">
          <span onClick={() => setShowDropdown(!showDropdown)}>Sai kiran</span>
          {showDropdown && (
            <div className="DROUPDOWN">
              <a href="#">Password change</a>
              <br />
              <a href="#">Log out</a>
            </div>
          )}
        </div>
      </div>
      <div className="all-buildings-text">{CurrentSiteName ? CurrentSiteName:"All buildings"}</div>
      <div className="horizontal-line1"></div>
 
      <div>
        <div className="vertical-line1"></div>
        <div className="vertical-line2"></div>
 
        <div className="tree">
        <span>Tree</span>
        </div>
        <div>
          <div>
            {siteData &&
              siteData.map((site, index) => (
                <div key={index}>
                  <div className="container2">
                    <span
                      className="span"
                      onClick={() => {
                        handleToggleExpand(index);
                      }}
                    >
                      {expandedSites.includes(index) ? "▼" : "▶"}
                    </span>
                    <div className="sitename"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        redirect1(site.SiteName);
                      }}
                    >
                      <img
                        src={image12}
                        className="box-image2"
                        alt="Building"
                      />
                      {site.SiteName}
                    </div>
                  </div>
                  {expandedSites.includes(index) && (
                    <div>
                      <div className="container1">
                        <span>
                          ▶{" "}
                          <img
                            src={image13}
                            className="box-image2"
                            alt="Spaces"
                          />
                          Spaces
                        </span>
                      </div>
                      <div className="container1">
                        <span>
                          ▶{" "}
                          <img
                            src={image14}
                            className="box-image2"
                            alt="Chiller"
                          />
                          Chiller
                        </span>
                      </div>
                      <div className="container1">
                        <span>
                          ▶
                          <img
                            src={image15}
                            className="box-image2"
                            alt="Handlers"
                          />{" "}
                          Air Handlers
                        </span>
                      </div>
                      <div className="container1">
                        <span>
                          ▶{" "}
                          <img
                            src={image16}
                            className="box-image2"
                            alt="Generic"
                          />
                          Generic
                        </span>
                      </div>
                      <div className="container1">
                        <span>
                          ▶{" "}
                          <img
                            src={image17}
                            className="box-image2"
                            alt="Systems"
                          />
                          Systems
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
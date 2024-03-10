import React, { useEffect, useState } from 'react';
import '../../Building.css';
import * as GraphQL from '../../GraphQL';
import {useHistory} from 'react-router-dom';
 
//import Navigation from '../../Navigation';
import image2 from '../../Assets/images/Cold_Space_Icon_gray.png';
import image1 from '../../Assets/images/Hot_Space_Icon_gray.png';
import image3 from '../../Assets/images/Water_Drop_Grey.png';
import image4 from '../../Assets/images/AirHandler_Fan.png';
import image5 from '../../Assets/images/communication.png';
import image6 from '../../Assets/images/alarm.png';
import image7 from '../../Assets/images/schedule.png';
import image8 from '../../Assets/images/alarmpage.png';
import image9 from '../../Assets/images/notes.png';
 
 
function Building() {
  const [siteData, setSiteData] = useState(null);
 
  const history = useHistory();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GraphQL.getData();
        console.log('Fetched data', data);
        setSiteData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
 
  const redirect1 = (SiteID,SiteName) => {
    history.push(`/ObjectFamily/${SiteID}?SiteName=${encodeURIComponent(SiteName)}`);
  };
 
 
 
  return (
 <div  >
  {/* <div>
  <Navigation />
  </div> */}
  <h2 className="sai">All Buildings</h2>
     
    <div className="container" style={{'margin-top':'-40px'}}>
      {siteData &&
        siteData.map((site, index) => (
          <div key={index } >
           <div className="building" onClick={()=>redirect1(site.SiteID,site.SiteName)}>
 
              <h1 className="heading">{site.SiteName}</h1>
              <div className="image-container">
              <img src={image6} alt="alarm" className="box-image" />
              <img src={image5} alt="communication" className="box-image" />
              <img src={image1} alt="Heat" className="box-image" />
              <img src={image2} alt="Cold" className="box-image" />
              <img src={image3} alt="Water" className="box-image" />
              <img src={image4} alt="AirHandler" className="box-image" />
            </div>
              <p className="description">Device E16H90673 is offline</p>
              <div className="image-container1">
              <img src={image7} alt="Water" className="box-image1" />
              <img src={image8} alt="AirHandler" className="box-image1" />
              <img src={image9} alt="Water" className="box-image1" />
            </div>
              <div className="horizontal-line"></div>
           
              <p className="location">{`${site.AddrCity}, ${site.AddrStateProvince}`}</p>
             
              <div className="backgroundcolor"></div>
              <div className="Horizontal"></div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}
export default Building;
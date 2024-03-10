import React, { useEffect, useState } from 'react';
//import { generateClient } from 'aws-amplify/api';
import { getEquipment, getSites } from './graphql/queries';
import {useHistory} from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import './NativeCloudBMS.css';
 
// const client = generateClient();
 
export const getData = async () => {
  try {
    const result = await API.graphql(graphqlOperation(getSites));
    return result.data.getSites;
  } catch (error) {
    throw error;
  }
};
 
 
export const GetData1 = () => {
  const [data, setData] = useState(null);
 
 
  const [siteData, setSiteData] = useState(null);
 const history=useHistory();
 useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await API.graphql(graphqlOperation(getEquipment));
      setData(result.data.getEquipment);
 
      const siteDataResult = await getData();
      setSiteData(siteDataResult);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
const handleGoBack=()=>{
  history.push("/");
}
 
  return (
 
    <div >
       
     {/* <Navigation/> */}
       
      <div className="GraphQL">
      {/* <div className="horizontal-line1"></div> */}
      <div style={{position:'absolute',top:'60px',right:'20px'}}>
        <button onClick={handleGoBack} style={{background:'#61ae34',color:'white', cursor:'pointer', 'border':'none', 'height':'25px'}}>Go back</button>
      </div>
      <br/>
      <h2 className="sai">Equipment Summary</h2>
      {data?.length > 0 ? (
        <table cellspacing="0" cellpadding="0" style={{"padding": "10px", 'margin-left': '140px'}}>
          <thead className="table-Style">
            <tr>
            <th className="th-Style">Name</th>
              <th className="th-Style">ActiveSetPoint</th>
              <th className="th-Style">EquipmentType</th>
              <th className="th-Style">HeatCoolMode</th>
              <th className="th-Style">SpaceTemperatureActive</th>
              <th className="th-Style">Variance</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((record,index) => (
              <tr  key={index}className={index % 2 === 0 ? 'table-even' : 'table-Row'} >
              <td className="table-dataStyle ">{record.Name}</td>
              <td className="td-Style">{record.ActiveSetPoint}</td>
              <td className="td-Style">{record.EquipmentType}</td>
              <td className="td-Style">{record.HeatCoolMode}</td>
              <td className="td-Style">{record.SpaceTemperatureActive}</td>
              <td className="td-Style">{record.Variance}</td>
            </tr>
            ))}
          </tbody>
        </table>
   
      ) : (
        <p>Loading...</p>
      )}
<div>
       
     
     
      </div>
   
      </div>
     
      </div>
   
  );
};

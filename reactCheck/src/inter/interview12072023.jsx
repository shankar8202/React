import { useState } from 'react';
import SiteTable from './Withjson';
import jData from './jeson.json'

const Interview12072023 = () => {
 const [data]=useState(jData)
 {console.log(data.ListOfSites.Sellable.map(data=>data.lat),"data")}
  return (
    <div>
      <h1>Sites</h1>
      <SiteTable listOfSites={data} />
     
    </div>
  );
};

export default Interview12072023;

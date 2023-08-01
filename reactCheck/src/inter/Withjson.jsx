// import React from 'react';

const SiteTable = ({ listOfSites }) => {
    console.log(listOfSites,"lis")
    
  return (
    <table>
      <thead>
        <tr>
          <th>Site ID</th>
          <th>Site Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {listOfSites?.listOfSites?.Sellable.map((site) => (
          <tr key={site.siteid}>
           
            <td>{site.lat}</td>
            <td>{site.log}</td>
          </tr>
        ))}
        {listOfSites?.listOfSites?.Whitelabelled.map((site) => (
          <tr key={site.siteid}>
            <td>{site.siteid}</td>
            <td>{site.sitename}</td>
            <td>{site.lat}</td>
            <td>{site.log}</td>
          </tr>
        ))}
        {listOfSites?.listOfSites?.ReadyForWhiteLabel.map((site) => (
          <tr key={site.siteid}>
            <td>{site.siteid}</td>
            <td>{site.sitename}</td>
            <td>{site.lat}</td>
            <td>{site.log}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SiteTable;

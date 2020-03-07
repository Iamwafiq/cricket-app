import React from 'react';

const HeaderComponent = (props) =>{
  const {getGameDetails} = props;

  return (
    <div className="pa2 bg-light-gray">
      <h2 className="pt2-l mb0-l mt2 ">Schedule</h2>
      <div className="pt2-l pb5-l tc bg-white-90  ">
        <button className="f6 f5-l fw6 bg-white-90 gray w-30 hover-bg-white-80 hover-light-red pa3" onClick={() => getGameDetails("Upcoming", "status")} >UPCOMING</button>
        <button className="f6 f5-l fw6 bg-white-90 gray w-30 hover-bg-white-80 hover-light-red pa3" onClick={() => getGameDetails("Running", "status")}>RUNNING</button>
        <button className="f6 f5-l fw6 bg-white-90 gray w-30 hover-bg-white-80 hover-light-red pa3" onClick={() => getGameDetails("Completed", "status")}>COMPLETED</button> 
      </div>
      <div className=" tc bg-white-90 bt-ns ">
        <button className="f6 f5-l bn-ns bg-white-90 black-80 w-30 hover-bg-light-yellow dib pa3 tc" onClick={() => getGameDetails("All", "type")}>All</button>
        <button className="f6 f5-l bn-ns bg-white-90 black-80 w-30 hover-bg-light-yellow dib pa3 tc" onClick={() => getGameDetails("International", "type")}>International</button>
        <button className="f6 f5-l bn-ns bg-white-90 black-80 w-30 hover-bg-light-yellow dib pa3 tc" onClick={() => getGameDetails("Domestic", "type")} >Domestic</button> 
      </div>
    </div>
  );
}

export default HeaderComponent;

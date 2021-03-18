import React from "react";
import Fade from "react-reveal/Fade";

const MoreDetails = () => {
  return (
    <div className="more-details-container">
      <h1>More Details</h1>
      <Fade bottom cascade>
        <div className="card-list-item">
          <div className="card-item">
            <p>Watch offline</p>
            <p>Available to download</p>
          </div>
          <div className="card-item">
            <p>This movie is...</p>
            <p>Adrenaline Rush, Exciting</p>
          </div>
          <div className="card-item">
            <p>Audio</p>
            <p>English [Original], English [Original]</p>
          </div>
          <div className="card-item">
            <p>Subtitles</p>
            <p>English, Vietnamese, Simplified Chinese, Traditional Chinese</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MoreDetails;

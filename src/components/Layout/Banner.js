import React from "react";
import Fade from "react-reveal/Fade";
import bg from "../../images/bg.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="img-box">
          <img src={bg} alt="" />
        </div>
        <Fade left cascade>
          <div className="info-container">
            <img
              src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSGayG5yUUQ-ybb4DNrAi_JDUSQmOq9inkoVrrrtAZKflbDpitr7D__2iMbJSsn8kGklH61QQUHn4yJ7WAN1uWc0k8MkEZ0MzvO5.png?r=f48"
              alt="bg"
            />
            <div className="details-container">
              <h2>Jumanji: The Next Level</h2>
              <p>
                When Spencer goes missing, Martha, Bethany and Fridge realize
                they must go back into Jumanji to find him — but something goes
                wrong.
              </p>
              <p>
                <span>Starting: </span>Dwayne Johnson, Jack Black, Kevin Hart
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="some-information">
        <Fade bottom cascade>
          <p>
            Awkwafina, Danny Glover and Danny DeVito join the original cast of
            "Jumanji: Welcome to the Jungle" for the sequel.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;

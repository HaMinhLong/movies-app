import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1 class="logo">
        <span>M</span>ovies
      </h1>
      <div className="info-container">
        <img
          src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSGayG5yUUQ-ybb4DNrAi_JDUSQmOq9inkoVrrrtAZKflbDpitr7D__2iMbJSsn8kGklH61QQUHn4yJ7WAN1uWc0k8MkEZ0MzvO5.png?r=f48"
          alt="bg"
        />
        <div className="details-container">
          <h2>Jumanji: The Next Level</h2>
          <p>
            When Spencer goes missing, Martha, Bethany and Fridge realize they
            must go back into Jumanji to find him — but something goes wrong.
          </p>
          <p>
            <span>Starting:</span>Dwayne Johnson, Jack Black, Kevin Hart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

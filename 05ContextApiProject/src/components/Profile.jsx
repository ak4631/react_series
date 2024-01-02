import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <h2>Please Login</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Using Context Extracting Data</h1>
        <h2>
          Hi!!! {user.username}, Your Password is {user.password}
        </h2>
      </div>
    );
  }
}

export default Profile;

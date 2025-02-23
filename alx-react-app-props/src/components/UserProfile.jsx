
import React, { useContext } from "react";
import UserContext from "../context/UserContext"; // Import UserContext

const UserProfile = () => {
  const userData = useContext(UserContext); // Access user data from context

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;

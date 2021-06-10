import React, { useState } from "react";
import Login from "./login/Login";
import Chat from "./chat/Chat";
import UserContext from "./context/UserContext";

/* Scaledrone channel ID goes here */
const CHANNEL_ID =
  `${process.env.REACT_APP_SCALEDRONE_CHANNEL_ID}` || "{CHANNEL_ID_GOES_HERE}";

export default function MyChatApp() {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);

  function onUserLogin(username, avatar) {
    if (username) {
      const drone = new window.Scaledrone(CHANNEL_ID, {
        data: { username, avatar },
      });
      drone.on("open", () => {
        setDrone(drone);
        setUser({ id: drone.clientId, username, avatar });
      });
    }
  }

  function userLogout() {
    drone.close();
    setDrone(null);
    setUser(null);
  }

  return (
    <div>
      <UserContext.Provider value={{ user, drone, onUserLogin, userLogout }}>
        {!user && <Login />}
        {user && <Chat />}
      </UserContext.Provider>
    </div>
  );
}

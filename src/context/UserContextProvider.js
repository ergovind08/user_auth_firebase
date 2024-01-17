import React from "react";
import Usercontext from "./Usercontext";

const UserContextProvider = ({ child }) => {
  const [user, setUser] = React.useState(null);
  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {child}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;

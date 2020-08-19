import React, { useState } from 'react'
// import  from 'API.js'
// Re render characters associated with the users unique ID
const UserContext = React.createContext({
    email: "",
    // isAuthenticated: false,
    _id : "",
    password: "",  
})

  const UserProvider = (props) => {
    const [UserState, setUserState] = useState({});
    return <UserContext.Provider value={[UserState, setUserState]}>{props.children}</UserContext.Provider>;
  };
  
  export { UserContext, UserProvider };
  
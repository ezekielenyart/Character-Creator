import React from 'react'
// import  from 'API.js'
// Re render characters associated with the users unique ID
const UserContext = React.createContext({
    // isAuthenticated: false,
    _id : "", 
    update: () => null,

})

  // const UserProvider = (props) => {
  //   const [UserState, setUserState] = useState({});
  //   return <UserContext.Provider value={[UserState, setUserState]}>{props.children}</UserContext.Provider>;
  // };
  
  export default UserContext
  
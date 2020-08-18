import React from 'react'
// import  from 'API.js'

const UserContext = React.createContext({
    email: "",
    isAuthenticated: false
    //password: "",  I don't think the user's password should be stored in the front end.
})


export default UserContext
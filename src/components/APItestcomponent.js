import React, { useContext } from 'react'
// import API from './utils/API'
import DeveloperContext from "./utils/DeveloperContext.js";

function TestAPI() {

    const { classList } = useContext(DeveloperContext);

    return (

        <div>
            <h1>API Testing Grounds</h1>
            
            <p>{classList}</p>

        </div>

    )
}

export default TestAPI;
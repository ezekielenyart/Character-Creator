import React from 'react';
import { Link, useLocation } from "react-router-dom";
import RosterBtn from '../components/RosterBtn'
function Signup() {
const location = useLocation();

    return (<div className="container logRegContainer">
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <RosterBtn />
        </form>
    </div>
    )
}
export default Signup

import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
    
    return (
        <div>
            {props.currentUser ?
            <div>
                <h1> Greetings, {props.currentUser.first_name} {props.currentUser.last_name} </h1>
                <button onClick={() => props.logout()}>Logout</button>
            </div>
            :
            <div>
                <h1>Not Logged in?</h1>
                <Link to="/signup">Signup</Link>
                <br />
                <Link to="/login">Login</Link>
            </div>
            }
        </div>
    )
}

export default Greeting;
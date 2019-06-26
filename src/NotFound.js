import React from 'react';
import { Link } from 'react-router-dom'; 
export default function NotFound(){
    return (
        <div>
            <h1>oops no page found..</h1>
            <Link to="/"><i>Back to home page</i></Link>
        </div>
    )
}
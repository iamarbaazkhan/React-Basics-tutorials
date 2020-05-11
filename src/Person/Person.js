import React from 'react';
// calling props in function
const person=(props)=>{
    // returning dynamic content 
return(
    <div>
        <p>I am  {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
    </div>
) 
}

export default person;
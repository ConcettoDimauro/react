import React from 'react';

import'./Pizza.css';

const pizza = ( props ) => {
    return (
        <div className="Pizza">
            <p > The {props.name} with {props.sliceCount} slices! </p>
            <input type="text" onChange={props.changed} value= {props.name} />
             <input type="number" onChange={props.slicechange} value= {props.sliceCount} />
            <p>{props.children}</p>
            </div> 
    )
};

export default pizza;





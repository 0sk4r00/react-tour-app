import React, { useState } from 'react';

const Tour = ({id,image,info,price,name}) => {
    const shortText = ()=>{
        {info.substring(0,200)}
    }
const [readMore,setReadMore]=useState(false)
  return <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap"/>
      <div className="card-body">
          <h5 className = "card-title">{name}</h5>
          <h5 className="right">{price}</h5>
          <br/>
          <p className="cadr-text sameLine">{info}</p>
          <h5 className = " bigger" onClick={shortText}>Read more</h5>
            <br/>
          <div className="btn btn-danger wrapper">Not interested</div>
      </div>
  </div>
};

export default Tour;
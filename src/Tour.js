import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
const [readMore,setReadMore]=useState(false)
  return <div className="card">
      <img className="card-image-top" src={image} alt="Card image cap"/>
      <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="right">{price}$</h5>
          <br/>
          <p className="card-text sameLine">{ readMore? info:`${info.substring(0,200)}...`}</p>
          <span className="bigger " onClick={()=>setReadMore(!readMore)}>
              {readMore?' show less':' read more'}
          </span>
          <div className="wrapper">
          <button type="button" class="btn btn-outline-danger" onClick={()=>removeTour(id)} >Not interested</button>
          </div>
      </div>
  </div>
};

export default Tour;
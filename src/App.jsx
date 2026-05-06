

import React, { useEffect, useState } from 'react'

const Card = () => {
  const [data, SetData] = useState ([]);
  useEffect (()=>{
    fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
    .then(data => data.json())
    .then(data => {
      SetData(data);
    })
  })

  
  return (
    <div>
      {data.map(el => (
        <div key = {el.id}>
          <img src={el.avatar} alt="" srcset="" />
          <h2>{el.name}</h2>
        </div>
      ))}
    </div>
  )
}
export default Card


 

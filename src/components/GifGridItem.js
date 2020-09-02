import React from 'react'

 const GifGridItem = ({title, url}) => {    

     return (
          <div className="animate__animated animate__bounce card">
              <img src={url} alt={title}/>
               <p> {title}</p>
          </div>
     ); 
}

export default GifGridItem; 
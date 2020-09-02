export const getGifs = async (category) => {

     const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=ikIGPT5W9RQSyzbsrk9AcaOXgHvygB7y`;

     const resp = await fetch (url); 
     const {data} = await resp.json(); 

     const gifts=data.map(img=> {
          return {
              id: img.id, 
              title: img.title,
              url: img.images?.downsized_medium.url //images? pregunta  si vienen imagenes
          }
     });          
      return gifts;      
 }; 
 
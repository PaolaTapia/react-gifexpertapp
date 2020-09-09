import React from 'react'; 
import { getGifs } from '../../helpers/getGifs';
//import { shallow } from 'enzyme';



describe('Prueba de getGifs Fetch', ()=> {

     test('debe de traer 5 elementos', async() => {

          const gifs= await getGifs('autos'); 

          expect (gifs.length).toBe(5); 
          
     }); 
     
     test('no debe traer elementos si no mando category', async() => {
          const gifs= await getGifs(''); 

          expect (gifs.length).toBe(0); 
     });    
     

})

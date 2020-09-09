import React from 'react';
import {shallow} from 'enzyme'; 

import GifExpertApp from '../GifExpertApp'; 

describe('Pruebas en GifExpertApp', () => {

     test('debe mostrar el componente correctamente', () => {
          const wrapper= shallow(<GifExpertApp/>); 
          expect(wrapper).toMatchSnapshot();           
     }); 

     test('debe de mostrar una lista de categorías', () => {
          const categories=['autos', 'cartas']; 
          const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>); 
          expect(wrapper).toMatchSnapshot(); 
          expect(wrapper.find('GifGrid').length).toBe(categories.length);          
     })
     
     
     
})

import React from 'react'; 
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Prueba de GifGridItem', ()=> {

     const title = 'un titulo'; 
     const url = 'https://localhost/imagen.jpg'; 
     const wrapper=shallow(<GifGridItem title={title} url={url}/> );
     
     test('debe mostrar el componente correctamente', () => {

          const wrapper = shallow(
               <GifGridItem title={title} url={url}/> 
               );
               
          expect(wrapper).toMatchSnapshot();
          
     }); 

     test('debe de tener un parrafo con el title', () => {

          const p=wrapper.find('p'); 
          
          expect(p.text().trim()).toBe(title); 
          
     }); 

     test('debe de tener la imagen igual al url y alt de los props', () => {

          const img= wrapper.find('img'); 

          expect(img.props().src).toBe(url); 
          expect(img.props().alt).toBe(title);           
     }); 
     test('debe tener la clase animate__animated animate__bounce ', () => {

          const div= wrapper.find('div'); 
          const className=div.prop('className'); 
          
          expect(className.includes('animate__bounce')).toBe(true); 
          
     }); 
     
     
})

import React from 'react'; 
import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory';

describe('Prueba en AddCategory', ()=> {

     //const setCategories=()=>{}; 
     const setCategories=jest.fn(); //con jest puedo saber como fue llamada, si fue llamada, cuantas veces
     let wrapper; 

     beforeEach(() =>{
          jest.clearAllMocks(); 
          wrapper= shallow(<AddCategory setCategories={setCategories}/>); 

     }); 

     test('debe de mostrarse correctamente', () => {
          expect(wrapper).toMatchSnapshot();           
     }); 

     test('debe de cambiar la caja de texto', () => {
          
          const input=wrapper.find('input'); 
          const value='Hola Mundo'; 

          input.simulate('change',{target:{value //value:value          
          }});           
     });

     test('No debe de postear la información con submit', () => {
        wrapper.find('form')  .simulate('submit',{preventDefault(){}}); 
        expect(setCategories).not.toHaveBeenCalled(); 
     });   
     
     test('debe de llamar el setCatgories y limpiar la caja de texto', () => {
          //1.simular el inputChange
          const input=wrapper.find('input'); 
          const value='Hola Mundo'; 
          input.simulate('change',{target:{value}});   
          
          //2.simular el submit
          wrapper.find('form')  .simulate('submit',{preventDefault(){}}); 
          
          //3.setCategories se debe haber llamado
          expect(setCategories).toHaveBeenCalled(); 
          expect(setCategories).toHaveBeenCalledTimes(1);           
          expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); 
          
          //4.el valor del input de estar ''          
          expect(input.prop('value')).toBe(''); 
     })
     
         
     
})



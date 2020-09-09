import React from 'react';
import {shallow} from 'enzyme'; 
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en useFetchGifs', () => {
     test('debe de retonar el estado inicial ', async() => {         

         // en GifGrid const {data:images, loading}= useFetchGifs('autos'); 

         const {result, waitForNextUpdate}= renderHook(()=>useFetchGifs('autos')); 
         const {data, loading}=result.current; 
         await waitForNextUpdate();
         
         expect(data).toEqual([]); 
         expect(loading).toBe(true);           
     }); 
     test('debe de retomar un arreglo de imgs y el loading en false', async () => {

          const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('autos')); 
          await waitForNextUpdate();
          const {data, loading}=result.current; 
          console.log(data,loading); 
          
          expect(data.length).toBe(5); 
          expect(loading).toBe(false);   
          
     })
     
     
     
})


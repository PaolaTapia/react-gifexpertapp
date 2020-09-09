// @flow 
import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

 const GifExpertApp = ({defaultCategories=[]}) => {

     //const [categories, setCategories]= useState(['cartas']); 

     const [categories, setCategories]= useState(defaultCategories);
     
     return (
          <>
               <h2>  GifExpertApp </h2>
               <AddCategory                
                    setCategories={setCategories} 
               />
               <hr/>
               
               { 
                    categories.map(category =>(
                         <GifGrid 
                              key={category}
                              category={category}
                         /> 
                    ))
               }
          
          </>
     );
};
export default GifExpertApp; 
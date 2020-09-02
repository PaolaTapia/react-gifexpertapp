import React, {useState} from 'react';
import PropTypes from 'prop-types'; 

 const AddCategory = ({setCategories}) => {

     const [inputValue,setInputValue] = useState (''); 

     const Agregar = (e)=>{
          e.preventDefault(); 
          if(inputValue.trim().length>2){
               setCategories( cats => [ inputValue,...cats]);               
               setInputValue('');
          }
          

     }

     return (
          <form onSubmit={Agregar}>
               <p>Buscar: </p>
               <input
                    type="text"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}                 
               />
          </form>
     )
}
AddCategory.propTypes={

     setCategories: PropTypes.func.isRequired
}

export default AddCategory; 
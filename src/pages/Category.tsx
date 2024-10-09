import axios from "axios";
import { useEffect, useState } from "react";
import CategoryType from "../types/CategoryType";
import '../css/Category.css'




    function Category(){

        const [categories,setCategories] = useState<CategoryType[]>([]);
        const [categoryName,setCategoryName] = useState<string>("");


        async function loadCategories(){
            const response=await axios.get("http://localhost:8083/categories");
            setCategories(response.data);
        }

        function handleCategoryName(event:any){
            setCategoryName(event.target.value);
        }

       async function addCategory(){
            await axios.post("http://localhost:8083/categories", {
                name:categoryName
            });
            loadCategories();
        }

        useEffect(function(){
            loadCategories();
        },[])

        return(
        
          <div style={{ display: 'flex', height: '100vh' }}>
<div style={{ width: '50%', backgroundColor: '#e5e7eb', padding: '1rem' }}>
              {/* Add Category Section */}
           
            <h1 style={{backgroundColor: "lightblue",borderRadius: "10px", padding: "10px"}}>Add Category</h1>
              
                <label className="text-lg text-slate-300 mb-3">Enter Category Name :  </label> 
                    
                <input type="text" className="block w-full p-3 border border-slate-300 rounded-lg text-slate-600 text-lg mb-4" onChange={handleCategoryName} />
               <div>-----------------------------------</div>
               <div>
               <button className="bg-red-500 text-red px-4 py-2 rounded-r-md hover:bg-red-600" onClick={addCategory}>Add Category </button>
               </div>
              
            </div>
      
            {/* Item Categories Section */}
            <div style={{ width: '50%', padding: '1rem' }}>
              <h2 className="solid bg-blue">Item Categories</h2>
              
              
                   
                    
                {categories.map(category  => (
                  
                  <div className="div1">
                  
  
      <h2 className="font-bold text-lg">{category.name}</h2>
      
      </div>
      
                ))}
                

     
     
                
                
              </div>
          
  </div>
        );
      }
export default Category;
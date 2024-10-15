import axios from "axios";
import { useEffect, useState } from "react";
import CategoryType from "../types/CategoryType";





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
        <div className="container mx-auto">
          

              {/* Add Category Section */}
           <div className="border border-slate-200 py-3 px-4 rounded-lg max-w-[400px]">
            <h5 style={{backgroundColor: "lightblue",borderRadius: "10px", padding: "10px"}}>Add Category</h5>
              
                <label className="text-lg text-slate-300 mb-3 p-2 mb-1">Enter Category Name :  </label> 
                    
                <input type="text" className="block w-full p-3 border border-slate-300 rounded-lg text-slate-600 text-lg mb-4" onChange={handleCategoryName} />
               
               <div>
               <button className="bg-blue-500 text-red px-4 py-2 rounded-r-md hover:bg-blue-600 mb-5" onClick={addCategory}>Add Category </button>
               </div>
              </div>
           
      
              <div className="container mx-auto pt-5 pb-5">

                <h1 className="text-3xl font-semibold mb-5 text-slate-900">Item Categories</h1>

                {categories && categories.map(function(category:CategoryType) {
                return(
                  <div className="text-slate-600 border border-slate-200 rounded-lg mb-3 p-3 shadow-lg inline-block me-4 text-lg">
                  {category.name}
                  </div>
                )
              })}
              </div>



          </div>
          
  

        );
      }
export default Category;
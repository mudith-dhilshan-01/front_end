import { useEffect, useState } from "react";
import ItemType from "../types/ItemType";
import axios from "axios";
import CategoryType from "../types/CategoryType";


function Items(){

    const [items,setItems]=useState<ItemType[] >([]);

    const[itemName,setItemName]=useState<string>("");
    const[itemPrice,setItemPrice]=useState<number>(0.0);
    const[itemDescription,setItemDescription]=useState<string>("");
    const[itemCategoryId,setItemCategoryId]=useState<number>();

    const [categories,setCategories]=useState<CategoryType[]>([]);

    async function loadItems() {
        const response=await axios.get("http://localhost:8083/items")
        setItems(response.data);
        
    }

    useEffect(function(){
        loadItems();
        loadCategories();
    },[])

     function handleItemName(event:any){
        setItemName(event.target.value);
    }

    function handleItemPrice(event:any){
        setItemPrice(Number(event.target.value));
    }

    function handleItemDescription(event:any){
        setItemDescription(event.target.value);
    }   

    function handleItemCategoryId(event:any){
        setItemCategoryId(Number(event.target.value));
    }

    async function loadCategories(){
        const response=await axios.get("http://localhost:8083/categories");
        setCategories(response.data);
    }

    async function addItem(){

        const data={
            name:itemName,
            price:itemPrice,
            description:itemDescription,
            itemCategoryId:itemCategoryId
        }

        try{
        await axios.post("http://localhost:8083/items",data);
        loadItems();
        setItemName("");
        setItemPrice(0.0);
        setItemDescription("");
        setItemCategoryId(0);
        }catch(error:any){
            console.log(error);
        }
    }
            
       


    return(
        <div className="container mx-auto pt-5 py-4">

<div className="border border-slate-500 py-3 px-4 rounded-lg max-w-[500px] mb-4">
            <form>
                <div>
                    <h3 className="text-slate-100 text-left">Add Item</h3>
                    <label className="text-slate-500 mb-2">Item Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4" value={itemName} onChange={handleItemName} required/>
                </div>

                <div>
                    <label className="text-slate-500 mb-2">Item Price</label>
                    <input type="number" className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4" value={itemPrice} onChange={handleItemPrice} required/>
                </div>

                <div>
                    <label className="text-slate-500 mb-2">Item Description</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4" value={itemDescription} onChange={handleItemDescription} required/>
                </div>

                <div>
                    <label className="text-slate-500 mb-2">Item Category</label>
                    <select className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4" onChange={handleItemCategoryId} required>
                        <option>Select Category</option>
                        {categories.map(function(category){
                            return(
                                <option value={category.id}>{category.name}</option>
                            )
                        })}

                        </select>
                </div>
            </form>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addItem}>Add Item</button>
            
        </div>


            <h1 className="text-3xl font-semibold text-center mb-1 text-slate-100">Items Details</h1>

            <table className="table min-w-full border-separate border-spacing-0 border-none text-left">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="w-[80px] text-start">Item Id</th>
                        <th className="w-[200px]">Item Name</th>
                        <th className="w-[200px]">Item Price</th>
                        <th className="w-[200px]">Item Description</th>
                        <th className="w-[200px]">Action</th>
                    </tr>
                </thead>

                <tbody>
                {items.map(function(items){
                return(
                    <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.price}</td>
                        <td>{items.description}</td>
                        <td></td>
                    </tr>
                )
            })}
                </tbody>

            </table>

       
        </div>
    )
}
    
export default Items;
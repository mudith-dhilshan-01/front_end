import { Link, useNavigate } from "react-router-dom";
import '../css/User.css';
import { useEffect, useState } from "react";
import ItemType from "../types/ItemType";
import axios from "axios";


function User() {   
    const [items,setItems]=useState<ItemType[]>([]);

    async function loadItems(){
        try{
            const response=await axios.get("http://localhost:8083/items");
            setItems(response.data);  
        }catch(error:any){
            console.log(error);
        }
        
    }

    useEffect(()=>{
        loadItems();
    },[])

    const[orderedItems,setOrderedItems]=useState<ItemType[]>([]);
    const[totalPrice,setTotalPrice]=useState<number>(0.0);

    function addItemToCart(item:ItemType){
        const updatedOrder=[...orderedItems,item];
        setOrderedItems(updatedOrder);
    }

    useEffect (function() {
        orderedItems.map(function(item) {
            setTotalPrice(totalPrice+item.price);
        })
    },[orderedItems])

    const navigate=useNavigate();
    async function saveOrder(){
        var itemIds:any =[];
        orderedItems.map(function(item) {
            itemIds.push(item.id);
        });
        try{
            await axios.post("http://localhost:8083/orders",{
                itemIds:itemIds
            })
            navigate("/order");
            } catch(error:any){
            console.log(error);
        }

    }
    return (
        <div>
        {/* Header*/}
        <div className="header">
                <div className="flex bg-slate-800">
                        <div className="w-[500px]">
                        <Link to="/user"> <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"> Home </button></Link>
                        </div>
                        <div className="w-[500px]">
                            <h1 className="text-2xl font-bold text-blue-500 text-white">Welcome To Tech World</h1>
                        </div>
                        <div className="w-[500px]">
                            <button className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded">Cart</button>
                        </div>
                </div>
         </div>
         <div className="flex">
        <div className="w-[500px] text-left">
            <span className="text-xl font-semibold text-slate-300 block h-[40px] ">Items</span>

            <div className="mt-5">
            {items.map(function(item) {
                return (
                    <div onClick={()=>addItemToCart(item)} className="border border-slate-500 rounded-lg p-2 mb-5 w-[300px]">
                        <div className="text-slate-300 text-lg">{item.name}</div>
                        <div className="text-slate-500 text-sm">{item.itemCategory?.name}</div>
                        <div className="text-green-600 text-sm text-right">Rs.{item.price} /=</div>
                    </div>
            )
                
            })}
            </div>
        
        </div>

        <div className="p-2 text-left">
            <span className="text-xl font-semibold text-slate-300 mb-2">Cart</span>

            <table className="w-full border-separate border-spacing-0 border-none text-left mt-5">
                <thead className="bg-slate-800">
                  
                        <td>Item ID</td>
                        <td>Name</td>
                        <td className="text-right">Price</td>

                </thead>
                <tbody>
                    {orderedItems.map(function(item) {
                        return (
                            <tr>
                            <td className="w-[80px] mt-4">{item.id}</td>
                            <td className="w-[200px] mt-4">{item.name}</td>
                            <td className="w-[200px] text-right mt-4">Rs.{item.price}</td>
                            
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={2}>
                            <strong className="mt-5">Total</strong>
                        </td>
                        <td className="border-t border-slate-500 text-right">
                            <strong className="mt-5">Rs.{totalPrice}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-5">
                <button onClick={saveOrder} className="bg-slate-800 text-white p-2 rounded-lg text-right">Save Order</button>
            </div>
        </div>

   </div> 
           
      </div>
      
    )
}

export default User;
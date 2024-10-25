import { useEffect, useState } from "react";
import StockType from "../types/StockType";
import ItemType from "../types/ItemType";
import axios from "axios";

function Stocks(){
    const [stocks,setStocks]=useState<StockType[] >([]);

    const[itemQuantity,setQuantity]=useState<number>(0.0);
    const[itemId,setItemId]=useState<number>();

    const [items,setItems]=useState<ItemType[]>([]);

    async function loadStocks() {
        const response=await axios.get("http://localhost:8083/stocks")
        setStocks(response.data);
        
    }

    async function loadItems(){
        const response=await axios.get("http://localhost:8083/items");
        setItems(response.data);
    }

    useEffect(function(){
        loadItems();
        loadStocks();
    },[])

    function handleItemId(event:any){
        setItemId(Number(event.target.value));
    }

    function handleQuantity(event:any){
        setQuantity(Number(event.target.value));
    }

    async function addStock(){

        const data={
            quantity:itemQuantity,
            itemId:itemId
        }

        try{
        await axios.post("http://localhost:8083/stocks",data);
        loadStocks();
        setQuantity(0.0);
        setItemId(0);
        }catch(error:any){
            console.log(error);
        }
    }

    const [editStockEditing, setEditStockEditing] = useState<StockType | null>(null);
    function editStock(stock:StockType){

          setEditStockEditing(stock);
          setQuantity(stock.quantity);
          setItemId(stock.item?.id);
    }
    async function updateStock(){
        const data={
            quantity:itemQuantity,
            itemId:itemId
        }
        try{
        axios.put(`http://localhost:8083/stocks/${editStockEditing?.id}`,data);
        loadStocks();
        setEditStockEditing(null);
        setQuantity(0.0);
        setItemId(0);
        }catch(error:any){
            console.log(error);
        }
    }

   function deleteStock(id:number){
        try{
        axios.delete(`http://localhost:8083/stocks/${id}`);
        loadStocks();
        }catch(error:any){
            console.log(error);
        }
    }

    return(
<div className="container mx-auto pt-5 py-4">

<div className="border border-slate-500 py-3 px-4 rounded-lg max-w-[500px] mb-4">
            <form>
                
                    <h3 className="text-slate-100 text-left">Add Stock</h3>
                    

                

                <div>
                    <label className="text-slate-500 mb-2">Items</label>
                    <select className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4" value={itemId} onChange={handleItemId} required>
                        <option>Select Item</option>
                        {items.map((items=> (
                            
                                <option value={items.id}>{items.name}</option>
                            )
                        ))}

                        </select>
                </div>

                <div>
                    <label className="text-slate-500 mb-2">Item Quantity</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4" value={itemQuantity} onChange={handleQuantity} required/>
                </div>

            </form>

            {editStockEditing ? (
                    <>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateStock}>Update Stock</button>
                    </>
                ) : (
                    <>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addStock}>Add Stock</button>

                    </>
                )}
        </div>

        <h1 className="text-3xl font-semibold text-center mb-1 text-slate-100">Stock Details</h1>

<table className="table min-w-full border-separate border-spacing-0 border-none text-left">
  <thead className="bg-slate-700">
    <tr>
      <th className="w-[80px] text-start">Stock Id</th>
      <th className="w-[100px]">Item Id</th>
      <th className="w-[200px]">Item Name</th>
      <th className="w-[200px]">Item Quantity</th>
      <th className="w-[200px]">Action</th>
    </tr>
  </thead>

  <tbody>
    {stocks.map((stock) => (
      <tr key={stock.id}>
        <td>{stock.id}</td>
        <td>{stock.item?.id || 'N/A'}</td>
        <td>{stock.item?.name || 'N/A'}</td>
        <td>{stock.quantity}</td>
        <td>
        <button onClick={() => editStock(stock)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        <button onClick={() => deleteStock(stock.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
                       



            

       
        </div>
    )
}

export default Stocks;
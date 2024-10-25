import { useEffect, useState } from "react";
import OrderType from "../types/OrderType";
import axios from "axios";
import { Link } from "react-router-dom";
function Orders(){

        const [orders,setOrders]=useState<OrderType[]>([]);

        async function loadOrders() {
            try{
                const response=await axios.get("http://localhost:8083/orders")
                setOrders(response.data);
            }catch(error:any){
                console.log(error);
            }
        }

        useEffect(function() {
            loadOrders();
        },[])


    return (
        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-2xl font-bold mb-4 text-white">Order</h1>
        <div className="text-left mb-7">
            <Link to="/order/create"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Order</button></Link>
        </div>
            <table className="w-full border-separate border-spacing-0 border-none text-left">
              <thead className="bg-slate-800">
                             <tr>
                    <th className="w-[80px]">Order ID</th>
                    <th className="w-[400px]">Order Date And Time</th>
                    <th className="w-[180px]">Total Amount</th>
                    <th className="w-[300px]">Action</th>
                            </tr>
                    </thead>

                    <tbody>
                        {orders.map((order)=>(
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderDateTime.toLocaleString()}</td>
                                <td>{order.totalPrice}</td>
                                
                                <td>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay Now</button>
                                   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}
export default Orders;
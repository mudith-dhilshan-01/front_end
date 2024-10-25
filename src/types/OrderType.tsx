import ItemType from "./ItemType";

interface OrderType {
    id:number,
    orderDateTime:Date,
    totalPrice:number,
    orderItems:ItemType[]
}
    
export default OrderType;
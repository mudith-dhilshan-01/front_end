import CategoryType from "./CategoryType";

interface ItemType{
    id:number,
    name:string,
    price:number,
    description:string,
    category?:CategoryType
}

export default ItemType;
import CategoryType from "./CategoryType";

interface ItemType{
    itemCategory: any;
    id:number,
    name:string,
    price:number,
    description:string,
    category?:CategoryType
}

export default ItemType;
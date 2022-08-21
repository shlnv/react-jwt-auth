import Repository from "../../data/repository/ProductNetworkRepository";

export default async function getProductById(id:string){
    return new Repository().getProductById(id)
}
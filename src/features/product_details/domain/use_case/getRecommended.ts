import Repository from "../../data/repository/ProductNetworkRepository";

export default async function getRecommended(page:number){
    return new Repository().getRecommended(page)
}
import ProductRepository from "../../domain/repository";
import FakeAPI from "../api/fakeAPI";

export default class ProductNetworkRepository implements ProductRepository{
    async addToBag(token: string, id: string): Promise<any> {
        const res = await FakeAPI.addToBag(token,id)
        return new Promise(resolve=>{
            resolve(res)
        });
    }

    async getProductById(id: string): Promise<any> {
        const res = await FakeAPI.getProductById(id)
        return new Promise(resolve=>{
            resolve(res)
        });
    }

    async getRecommended(page: number): Promise<any> {
        const res = await FakeAPI.getRecommended(page)
        return new Promise(resolve=>{
            resolve(res)
        });
    }
}
import {useCallback} from "react";
import Product from "../model/Product";
import Manufacturer from "../model/Manufacturer";
import New_arrival from "../model/New_arrival";
import Photo from "../model/Photo";
import Tag from "../model/Tag";
import Categories from "../model/Categories";

export default  class FakeAPI{
    static getProductById = async (id)=> {
        return new Promise(resolve => {
            setTimeout(()=>
            {
                resolve(productsNew_arrival)
            }, 3000)
        })

    }
    static getNewArrival = async(page=1)=>
    {
        return new Promise(resolve => {
            setTimeout(()=>
            {
                resolve(productsNew_arrival)
            }, 3000)
        })
    }
    static addToBag = async (token, id)=>
    {

    }
}
const productsNew_arrival = [
    new New_arrival(2, "Basic t-shirt", 35, "", 1),
    new New_arrival(3, "Basic t-shirt", 35, "", 2),
    new New_arrival(4, "Basic t-shirt", 35, "", 3),
    new New_arrival(5, "Basic t-shirt", 35, "",4)
]


import {newArrivalRepository} from "../repository";

export default async function getProductById(id)
{
    return newArrivalRepository().getProductById(id)
}
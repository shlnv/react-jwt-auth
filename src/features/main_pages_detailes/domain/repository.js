import FakeAPI from "../data/api/fakeAPI";

export function newArrivalRepository()
{
    return {
        getProductById: async (id) => {
            const res = await FakeAPI.getProductById(id)
            return new Promise(resolve => {
                resolve(res)
            });
        },
        getRecommended: async (page) => {
            const res = await FakeAPI.getProductById(id)
            return new Promise(resolve => {
                resolve(res)
            })
        },
        addToBag: async (token, id) => {
            const res = await FakeAPI.getProductById(id)
            return new Promise(resolve =>
            {
                resolve(res)
            })
        }
    }
}
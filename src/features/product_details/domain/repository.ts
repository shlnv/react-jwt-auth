
// TODO use model classes
export default interface ProductRepository{
    getProductById: (id:string)=> Promise<any>
    getRecommended: (page:number)=>Promise<Array<any>>
    addToBag: (token:string, id:string)=> Promise<any>
}

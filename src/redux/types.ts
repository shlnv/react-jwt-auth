import Product from "../features/product_details/data/model/Product";
import ProductInList from "../features/product_details/data/model/ProductInList";

export interface Store{
    product: ProductPageInfo
}

export interface ProductPageInfo{
    loading: Boolean
    data:  Product
    error: string
    recommendedList: Array<ProductInList>
}
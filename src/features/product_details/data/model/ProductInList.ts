export default class ProductInList{
    id: string;
    name: string;
    price: number;
    sale: number;
    image: string;
    rate: number;

    constructor(id: string,
                name: string,
                price: number,
                sale: number,
                image: string,
                rate: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.sale = sale;
        this.image = image;
        this.rate = rate;
    }
}
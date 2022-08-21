export default class Option{
    id: string;
    name: string;
    product_id: string;

    constructor(id: string, name: string, product_id: string) {
        this.id = id;
        this.name = name;
        this.product_id = product_id;
    }
}
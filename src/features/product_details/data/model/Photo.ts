export default class Photo{
    id: string;
    product_id: string;
    url: string;

    constructor(id: string, product_id: string, url: string) {
        this.id = id;
        this.product_id = product_id;
        this.url = url;
    }
}
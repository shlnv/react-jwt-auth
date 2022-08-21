export default class Tag{
    id: string;
    tag_name: string;
    product_id: string;

    constructor(id: string, tag_name: string, product_id: string) {
        this.id = id;
        this.tag_name = tag_name;
        this.product_id = product_id;
    }
}
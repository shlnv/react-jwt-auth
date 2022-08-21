export default class Tag {
    id
    tag_name
    product_id

    constructor(id, tag_name, product_id) {
        this.id = id;
        this.tag_name = tag_name;
        this.product_id = product_id;
    }
}
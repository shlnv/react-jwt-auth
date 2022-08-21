export default class Points{
    id: string;
    product_id: string;
    point: string;
    date: string;
    customer_id: string;
    is_ignore: boolean;


    constructor(id: string,
                product_id: string,
                point: string,
                date: string,
                customer_id: string,
                is_ignore: boolean) {
        this.id = id;
        this.product_id = product_id;
        this.point = point;
        this.date = date;
        this.customer_id = customer_id;
        this.is_ignore = is_ignore;
    }
}
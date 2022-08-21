import Tag from "./Tag";
import Manufacturer from "./Manufacturer";
import Category from "./Category";
import Photo from "./Photo";
import Option from "./Option";

export default class Product{
    id: string; // string uuid!!
    name: string; // string
    model: string; // string
    price: number; // number
    availability: boolean; // boolean
    count: number; // number
    tags: Array<Tag>; // Tag
    manufacturer: Manufacturer; // Manufacturer
    category: Array<Category>; // Category
    comment: string; // string
    raiting_points: number; // Points
    photos: Array<Photo>; // Photo
    options: Array<Option>; // Option
    // ask to back-end
    sale: number; // number


    constructor(id: string,
                name: string,
                model: string,
                price: number,
                availability: boolean,
                count: number,
                tags: Array<Tag>,
                manufacturer: Manufacturer,
                category: Array<Category>,
                comment: string,
                raiting_points: number,
                photos: Array<Photo>,
                options: Array<Option>,
                sale: number) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.price = price;
        this.availability = availability;
        this.count = count;
        this.tags = tags;
        this.manufacturer = manufacturer;
        this.category = category;
        this.comment = comment;
        this.raiting_points = raiting_points;
        this.photos = photos;
        this.options = options;
        this.sale = sale;
    }
}


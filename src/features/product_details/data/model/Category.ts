import Tag from "./Tag";

export default class Category{
    id: string;
    name: string;
    comment: string;
    availability: boolean;
    tags: Array<Tag>;
    parent: string;
    level: number;
    logo: string;

    constructor(id: string,
                name: string,
                comment: string,
                availability: boolean,
                tags: Array<Tag>,
                parent: string,
                level: number,
                logo: string) {
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.availability = availability;
        this.tags = tags;
        this.parent = parent;
        this.level = level;
        this.logo = logo;
    }
}
export default class Manufacturer{
    id: string;
    name: string;
    logo: string;
    comment: string;

    constructor(id: string,
                name: string,
                logo: string,
                comment: string) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.comment = comment;
    }
}
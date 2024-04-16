import { faker } from "@faker-js/faker";
import { MarkerItem } from "./CustomMap";

export class User implements MarkerItem{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "black";
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    };
}

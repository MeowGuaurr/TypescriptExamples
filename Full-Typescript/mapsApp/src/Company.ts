import { faker } from "@faker-js/faker";
import { MarkerItem } from "./CustomMap";

export class Company implements MarkerItem{
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "red"; 

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
        <div>
                <h1>Name: ${this.name} </h1>
                <h3>Summary: ${this.catchPhrase}  </h3>
        </div>
        `
    }
}
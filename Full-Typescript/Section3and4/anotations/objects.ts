const profile = {
    name: 'alex',
    age: 36,
    coords: {
        lat: 0,
        lng: 12
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age }: {age: number} = profile;
console.log(age);
const { coords: { lat, lng}} : { coords: {lat: number; lng: number}} = profile;
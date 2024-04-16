import { User } from "./User.ts";
import { Company } from "./Company.ts";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// we can not access customMap.googleMap bc is a private property
customMap.addMarker(user)
customMap.addMarker(company)

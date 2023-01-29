import { VehiculeInformation } from "./vehicule-information";
import { Witness } from "./witness";

export class Constat {
    id:                          number;
    accidentDate:                Date;
    accidentSite:                string;
    hurtPeople:                  boolean;
    materialDamageOtherThenAorB: boolean;
    witness:                     Witness[];
    vehiculeInformationA:        VehiculeInformation;
    vehiculeInformationB:        VehiculeInformation;
    sketch:                      string;
}
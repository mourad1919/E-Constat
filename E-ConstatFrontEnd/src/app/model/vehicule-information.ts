import { DriverInformation } from "./driver-information";
import { InsurenceCompanyInformation } from "./insurance-company-information";
import { InsuredInformation } from "./insured-inforamation";
import { Vehicule } from "./vehicule";

export class VehiculeInformation{
    id:                          number;
    insurenceCompanyInformation: InsurenceCompanyInformation;
    driverInformation:           DriverInformation;
    insuredInforamation:         InsuredInformation;
    vehicule:                    Vehicule;
    apperantDamage:              string;
    observation:                 string;
    signature:                   string;
    circumstances: string;
}
import {get} from "./fetcher";

const url = "https://restcountries.com/v3.1";
const limit = 50;

export type CountryType = {
    languages: string | object,
    name: string | object,
    region: string,
    population: number,
    status: string,
    startOfWeek: string,
}

export const fetchCountriesData = async (): Promise<CountryType[]> => {
    return get(`${url}/all?fields=name,languages,region,population,status,startOfWeek`);
}
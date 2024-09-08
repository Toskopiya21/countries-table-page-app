import {Dispatch} from "redux";
import {fetchCountriesData} from "@/api/countriesApi";
import {CountryType} from "./countriesReducer";

export type ColumnTypeAction = {
    type: "CHANGE_COLUMNS_VISIBILITY",
    isVisible: boolean,
    id: string,
}
export type ChangeColumnTypeAction = {
    type: "CHANGE_COLUMNS",
    title: string,
}
export type GetCountriesAction = {
    type: "GET_COUNTRIES",
    data: Array<CountryType>
}

export const GET_COUNTRIES = "GET_COUNTRIES"
export const CHANGE_COLUMNS_VISIBILITY = "CHANGE_COLUMNS_VISIBILITY"
export const CHANGE_COLUMNS = "CHANGE_COLUMNS"

export const getCountries = (limit: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const data = await fetchCountriesData();
            dispatch({
                type: GET_COUNTRIES,
                data: data.slice(0, limit),
            });
        } catch (error) {
            console.error("Error getting countries:", error);
        }
    };
};

export const changeColumnsVisibility = (id: string, isVisible: boolean): ColumnTypeAction => {
    return {
        type: CHANGE_COLUMNS_VISIBILITY,
        isVisible: isVisible,
        id
    };
};

export const changeColumns = (title: string): ChangeColumnTypeAction => {
    return {
        type: CHANGE_COLUMNS,
        title
    };
};

import {
    CHANGE_COLUMNS,
    CHANGE_COLUMNS_VISIBILITY,
    ChangeColumnTypeAction,
    ColumnTypeAction, GET_COUNTRIES,
    GetCountriesAction
} from "./countriesActions"
import {ColumnType} from "../components/App";
import {v1} from "uuid";

export interface CountriesState {
    countries: Array<CountryType>;
    columns: Array<ColumnType>;
}

export type CountryType = {
    languages: string | object,
    name: string | object,
    region: string,
    population: number,
    status: string,
    startOfWeek: string,
}

const initialState: CountriesState = {
    countries: [],
    columns: []
};


type ActionsTypes =
    | GetCountriesAction
    | ColumnTypeAction
    | ChangeColumnTypeAction

export const countriesReducer = (
    state = initialState,
    action: ActionsTypes
) => {
    switch (action.type) {
        case GET_COUNTRIES:
            const stateCopy = {...state};


            // рассматриваем items по свойству common
            const data = action.data.map(item => ({
                ...item,
                name: item.name["common"]
            }));

            return {
                ...state,
                countries: data,
            };
        case CHANGE_COLUMNS_VISIBILITY: {
            const stateCopy = {...state};

            const column = stateCopy.columns.find((t) => t.id === action.id);

            if (column) {
                column.isVisible = action.isVisible;
            }

            return {
                ...stateCopy,
                columns: stateCopy.columns,
            };
        }
        case CHANGE_COLUMNS: {
            const stateCopy = {...state};

            if (stateCopy.columns.find((t) => t.title === action.title)) {
                return state;
            }

            const column = {id: v1(), title: action.title, isVisible: true};
            const columns = [ ...stateCopy.columns, column];

            stateCopy[action.title] = columns;

            return {
                ...state,
                columns: columns,
            };
        }
        default:
            return state;
    }
};

export default countriesReducer;

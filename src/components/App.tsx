import './App.scss'
import {Table} from "./table/Table";
import {ColumnVisibilityManager} from "./filters/ColumnVisibilityManager";
import {useSelector} from "react-redux";
import {CountryType} from "@/api/countriesApi";
import {AppRootState} from "@/state/store";

export type ColumnType = {
    id: string
    title: string,
    isVisible: boolean,
}

export const App = () => {
    const {countries, columns} = useSelector<AppRootState, {
        countries: Array<CountryType>,
        columns: Array<ColumnType>
    }>(
        (state) => ({countries: state.countriesReducer.countries, columns: state.countriesReducer.columns})
    )

    return (
        <>
            <h1>Countries Information</h1>
            <ColumnVisibilityManager columns={columns}/>
            <Table columns={columns} countries={countries}/>
        </>
    )
}
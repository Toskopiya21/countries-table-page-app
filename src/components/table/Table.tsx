import * as React from "react";
import {ColumnType} from "../App"
import {CountryType} from "@/api/countriesApi";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {useEffect} from "react";
import {changeColumns, getCountries} from "@/state/countriesActions";
import {useDispatch} from "react-redux";

export type TableType = {
    countries: Array<CountryType>;
    columns: Array<ColumnType>;
}
export const Table: React.FC<TableType> = ({countries, columns}) => {
    const filteredColumns = columns.filter(c => c.isVisible)

    const dispatch = useDispatch();

    useEffect(() => {
        getCountries(50)(dispatch);
    }, [dispatch]);

    useEffect(() => {
        if (countries.length === 0) return;
        Object.keys(countries[0]).forEach(key => dispatch(changeColumns(key)));
    }, [dispatch, countries]);
    return (
        <table>
            <TableHeader columns={filteredColumns}/>
            <TableBody columns={filteredColumns} countries={countries}/>
        </table>
    )
}

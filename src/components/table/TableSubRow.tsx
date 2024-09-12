import * as React from "react";
import {ColumnType} from "../App"
import {CountryType} from "@/api/countriesApi";
import "./table.scss"
import {v1} from "uuid";

export type TableRowTypeProps = {
    columns: Array<ColumnType>;
    country: CountryType;
    title: string;
}
export const TableSubRow: React.FC<TableRowTypeProps> = React.memo(({columns, country, title}) => {

    return (
        <>
            {Object.keys(country[title]).map((k) =>
                <tr key={v1()} className="table-row">
                    {columns.map((c) =>
                        c.isVisible &&
                        <React.Fragment key={c.id}>
                            {c.title == title
                                ? <td className={c.title === "timezones" ?"timezones" + " " + "header-cell": "header-cell"}>{k}</td>
                                : <td className={c.title === "timezones" ?"timezones" + " " + "header-cell": "header-cell"}>{}</td>
                            }
                        </React.Fragment>
                    )}
                </tr>
            )}
        </>
    )
})

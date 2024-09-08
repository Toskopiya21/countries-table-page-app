import * as React from "react";
import {ColumnType} from "../App"
import {CountryType} from "@/api/countriesApi";
import "./table.scss"

export type TableRowProps = {
    columns: Array<ColumnType>;
    country: CountryType;
    title: string;
}
export const TableSubRow: React.FC<TableRowProps> = React.memo(({columns, country, title}) => {

    return (
        <>
            {Object.keys(country[title]).map((k, i) =>
                <tr key={i} className="table-row">
                    {columns.map((c, i) =>
                        c.isVisible &&
                        <React.Fragment key={i}>
                            {c.title == title
                                ? <td className="header-cell">{k}</td>
                                : <td className="header-cell">{}</td>
                            }
                        </React.Fragment>
                    )}
                </tr>
            )}
        </>
    )
})

import * as React from "react";
import {ColumnType} from "../App"
import {CountryType} from "@/api/countriesApi";
import "./table.scss"

export type TableRowTypeProps = {
    columns: Array<ColumnType>;
    country: CountryType;
    title: string;
}
export const TableSubRow: React.FC<TableRowTypeProps> = React.memo(({columns, country, title}) => {

    return (
        <>
            {Object.keys(country[title]).map((k) =>
                <tr key={k.toString()} className="table-row">
                    {columns.map((c) =>
                        c.isVisible &&
                        <React.Fragment key={c.toString()}>
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

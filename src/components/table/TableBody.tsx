import {useMemo} from "react";
import * as React from "react";
import {ColumnType} from "../App"
import {CountryType} from "@/api/countriesApi";
import {TableSubRow} from "./TableSubRow";
import "./table.scss"

export type TableBodyProps = {
    countries: Array<CountryType>;
    columns: Array<ColumnType>;
}
export const TableBody: React.FC<TableBodyProps> = React.memo(({countries, columns}) => {
    const columnTitleForSubRow = "languages"
    const hasColumn = useMemo(() => columns.some(item => item.title === columnTitleForSubRow && item.isVisible), [columns]);

    return (
        <tbody>
        {countries.map((c, i) =>
            <React.Fragment key={i}>
                <tr className="table-row">
                    {columns.map((l, i) =>
                        <React.Fragment key={i}>
                            {l.title === columnTitleForSubRow
                                ? <td key={i} className="header-cell">{
                                    ((Object.keys(c[columnTitleForSubRow])).length == 1)
                                        ? Object.values(c[columnTitleForSubRow])
                                        : (Object.keys(c[columnTitleForSubRow])).length
                                }
                                </td>
                                : <td key={i} className="header-cell">{c[`${l.title}`]}</td>
                            }
                        </React.Fragment>
                    )}
                </tr>

                {(hasColumn && (Object.keys(c[columnTitleForSubRow])).length > 1) &&
                    <TableSubRow columns={columns} country={c} title={columnTitleForSubRow}/>
                }
            </React.Fragment>
        )}
        </tbody>
    )
})

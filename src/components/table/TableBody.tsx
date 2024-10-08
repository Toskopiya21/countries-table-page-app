import {useMemo} from "react";
import * as React from "react";
import {ColumnType} from "../App"
import {CountryType} from "@/api/countriesApi";
import {TableSubRow} from "./TableSubRow";
import "./table.scss"
import {v1} from "uuid";

export type TableBodyTypeProps = {
    countries: Array<CountryType>;
    columns: Array<ColumnType>;
}
export const TableBody: React.FC<TableBodyTypeProps> = React.memo(({countries, columns}) => {
    const columnTitleForSubRow = "languages"
    const hasColumn = useMemo(() => columns.some(item => item.title === columnTitleForSubRow && item.isVisible), [columns]);

    return (
        <tbody>
        {countries.map((c) =>
            <React.Fragment key={v1()}>
                <tr className="table-row">
                    {columns.map((l) =>
                        <React.Fragment key={l.id}>
                            {l.title === columnTitleForSubRow
                                ? <td key={l.id} className="header-cell">{
                                    ((Object.keys(c[columnTitleForSubRow])).length == 1)
                                        ? Object.values(c[columnTitleForSubRow])
                                        : (Object.keys(c[columnTitleForSubRow])).length
                                }
                                </td>
                                : <td key={l.id} className={l.title === "timezones" ?"timezones" + " " + "header-cell": "header-cell"}>{c[`${l.title}`]}</td>
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

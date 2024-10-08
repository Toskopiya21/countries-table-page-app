import * as React from "react";
import {ColumnType} from "../App"
import "./table.scss"

export type TableHeaderTypeProps = {
    columns: Array<ColumnType>;
}
export const TableHeader: React.FC<TableHeaderTypeProps> = React.memo(({columns}) => {
    return (
        <thead>
            <tr className="table-header">
                {columns.map((c) =>
                    <th key={c.id} className={c.title === "timezones" ?"timezones" + " " + "header-cell": "header-cell"}>{c.title}</th>
                )}
            </tr>
        </thead>
    )
})
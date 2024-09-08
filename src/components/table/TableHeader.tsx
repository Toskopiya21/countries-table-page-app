import * as React from "react";
import {ColumnType} from "../App"
import "./table.scss"

export type TableHeaderProps = {
    columns: Array<ColumnType>;
}
export const TableHeader: React.FC<TableHeaderProps> = React.memo(({columns}) => {
    return (
        <thead>
            <tr className="table-header">
                {columns.map((c, i) =>
                    <th key={i} className="header-cell">{c.title}</th>
                )}
            </tr>
        </thead>
    )
})
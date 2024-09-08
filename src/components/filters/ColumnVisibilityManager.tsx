import {useDispatch} from "react-redux";
import {ChangeEvent, useCallback} from "react";
import * as React from "react";
import {ColumnType} from "../App";
import {changeColumnsVisibility} from "@/state/countriesActions";
import "./columnsVisibility.scss"

type ColumnVisibilityManagerType = {
    columns: Array<ColumnType>;
}

export const ColumnVisibilityManager = ((props: ColumnVisibilityManagerType) => {
    const dispatch = useDispatch()

    const onChangeHandler = useCallback((id: string, e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeColumnsVisibility(id, e.currentTarget.checked))
        }, [dispatch]
    )

    return (
        <div className={"columnVisibilityManager"}>
            <h4 className={"title"}>Filtering by columns</h4>
            {props.columns.map((c) =>
                <div key={c.id} className="checkboxes__item">
                    <label htmlFor={c.id} className="checkbox style-c">
                        <input type={"checkbox"} onChange={(e) => onChangeHandler(c.id, e)} checked={c.isVisible}
                               id={c.id}/>
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__body">{c.title}</div>
                    </label>
                </div>
            )
            }
        </div>
    )
})

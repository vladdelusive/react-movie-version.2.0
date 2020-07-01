import React from 'react'

export const FieldInput = React.memo((props: any) => {
    return (
        <>
            <label
                className=""
                htmlFor={props.input.name}>
                {props.label}
            </label>
            <input
                className=""
                id={props.input.name}
                placeholder={props.placeholder}
                {...props.input}
                type={props.type} />
            {
                props.meta.touched &&
                props.meta.visited &&
                !props.meta.active &&
                <div style={{ color: "red" }}>{props.meta.warning || props.meta.error}</div>
            }
        </>
    )
})
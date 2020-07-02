import React from 'react'

export const FieldInput = React.memo((props: any) => {
    return (
        <>
            <label
                className="review-form__label"
                htmlFor={props.input.name}>
                {props.label}
            </label>
            {
                props.meta.touched &&
                !props.meta.active &&
                <div className="validation">
                    {props.meta.warning || props.meta.error}
                </div>
            }
            <input
                className={props.className}
                id={props.input.name}
                // placeholder={props.placeholder}
                {...props.input}
                type={props.type}
            />
        </>
    )
})
import React from 'react'

export const FieldInput = React.memo((props: any) => {
    console.log(props);
    return (
        <>
            <label
                className="review-form__label"
                htmlFor={props.input.name}>
                {props.label}
            </label>
            { props.fieldType === "textarea" ? 
                <textarea
                    className={props.className}
                    id={props.input.name}
                    {...props.input}
                    type={props.type}>
                </textarea>
                : <input
                    className={props.className}
                    id={props.input.name}
                    // placeholder={props.placeholder}
                    {...props.input}
                    type={props.type} />
            }       
            {
                props.meta.touched &&
                props.meta.visited &&
                !props.meta.active &&
                <div className="validation">
                    {props.meta.warning || props.meta.error}
                </div>
            }
        </>
    )
})
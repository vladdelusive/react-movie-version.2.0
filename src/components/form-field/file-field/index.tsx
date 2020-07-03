import React from 'react'
import './style.css'

export const FileField = (props: any) => {
    const onChangeHandler = (e: any) => {
        props.input.onChange(e.target.files[0])
    }
    return (
        <>
            <label
                className="review-form__label"
                htmlFor="file">
                {props.label}
            </label>
            {
                <div className="validation">
                    {props.meta.warning || props.meta.error}
                </div>
            }

            <input
                onChange={onChangeHandler}
                type="file"
                className="review-form__file"
                accept=".jpg, .jpeg, .png"
            />
        </>
    )
}
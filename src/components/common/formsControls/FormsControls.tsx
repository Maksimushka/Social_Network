import React from 'react';
import s from './FormsContols.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    const fieldStyle = `${s.textarea} ${hasError ? s.error : ''} `
    return (
        <div>
            <textarea className={fieldStyle} {...input} {...props}/>
            { hasError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    const fieldStyle = `${s.input} ${hasError ? s.error : ''} `
    return (
        <div>
            <textarea className={fieldStyle} {...input} {...props}/>
            { hasError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
}
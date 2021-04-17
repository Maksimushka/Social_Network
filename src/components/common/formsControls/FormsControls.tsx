import React from 'react';
import s from './FormsContols.module.css'
import {Field} from 'redux-form';
import {FieldHookConfig, useField} from 'formik';

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
            <input className={fieldStyle} {...input} {...props}/>
            { hasError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
}

type UseFormikPropsType = {label: string} & FieldHookConfig<string>

export const InputUse: React.FC<UseFormikPropsType> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} placeholder={props.placeholder} type={props.type} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

type MyCheckboxPropsType = FieldHookConfig<string>

export const MyCheckbox = ({ children, ...props }: MyCheckboxPropsType) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                {children}
                <input {...field} placeholder={props.placeholder} type="checkbox" />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const CreateField = (placeholder: string, name: string, validators: any, component: any, type?: string) => (
    <Field component={component} name={name}
           type={type}
           validate={[...validators]}
           placeholder={placeholder}/>
)
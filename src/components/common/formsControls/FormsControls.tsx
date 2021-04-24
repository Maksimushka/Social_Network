import React from 'react';
import {FieldHookConfig, useField} from 'formik';
import {Checkbox, Input} from 'antd';

const { TextArea } = Input;

type UseFormikPropsType = {label?: string} & FieldHookConfig<string>
type MyCheckboxPropsType = FieldHookConfig<string>

export const InputUse: React.FC<UseFormikPropsType> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <Input style={props.style} {...field} placeholder={props.placeholder} type={props.type} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const TextareaUse: React.FC<UseFormikPropsType> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <TextArea style={props.style} {...field} placeholder={props.placeholder} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const MyCheckbox = ({ children, ...props }: MyCheckboxPropsType) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            {children}
            <Checkbox  checked={field.checked} {...field} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};
import React from 'react';
import {Field, useFormik} from 'formik';
import {Button} from 'antd';
import {SearchFilterType} from '../../Redux/users-page/users-actions';


type UsersSearchFormProps = {
    onFilterChanged: (filter: SearchFilterType) => void
    filter: SearchFilterType
}

const UsersSearchForm = React.memo(({onFilterChanged, filter}: UsersSearchFormProps) => {
    const formik = useFormik({
        initialValues: {value: filter.term, friend: String(filter.friend)},
        onSubmit: values => {
            const filter = {
                term: values.value,
                friend: values.friend === 'null' ? null : values.friend === 'true'
            }
            onFilterChanged(filter)
        }
    })
    return (
        <div>
            <form style={{width: '500', display: 'flex'}} onSubmit={formik.handleSubmit}>
                <Field type="text" name="term"/>
                <Field name="friend" as="select">
                    <option value="null">All</option>
                    <option value="true">Followed</option>
                    <option value="false">Unfollowed</option>
                </Field>
                <Button htmlType='submit'>Search</Button>
            </form>
        </div>
    );
});

export default UsersSearchForm;
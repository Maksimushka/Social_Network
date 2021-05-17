import React from 'react';
import {useFormik} from 'formik';
import {Button, Input, Select} from 'antd';
import {SearchFilterType} from '../../Redux/users-page/users-actions';

const {Option} = Select

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
    const handleSelectChange = (value: string) => {
        formik.setFieldValue("friend", value);
    };
    return (
        <div>
            <form style={{width: '500', display: 'flex'}} onSubmit={formik.handleSubmit}>
                <Input {...formik.getFieldProps('value')} />
                <Select
                    value={formik.values.friend}
                    onChange={handleSelectChange}
                >
                    <Option value="null">All</Option>
                    <Option value="true">Followed</Option>
                    <Option value="false">Unfollowed</Option>
                </Select>
                <Button htmlType='submit'>Search</Button>
            </form>
        </div>
    );
});

export default UsersSearchForm;
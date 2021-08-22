import { Field, Form, Formik } from 'formik';
import React from 'react';
import s from './UsersSearchForm.module.css'
import { FilterType } from '../../redux/users-reducer';

const userSearchFormValidate = () => {
  const errors = {};
  return errors;
};

type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
};

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {

  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
const filter: FilterType = {
  term: values.term,
  friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
}

    onFilterChanged(filter);
    setSubmitting(false);
  };

  return <div className={s.wrapper}>
    <Formik
      initialValues={{ term: '', friend: 'null' }}
      validate={userSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='term' />
          <Field as='select' name='friend'>
            <option value='null'>All</option>
            <option value='true'>Only followed</option>
            <option value='false'>Only unfollowed</option>
          </Field>
          <button type='submit' disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>
})
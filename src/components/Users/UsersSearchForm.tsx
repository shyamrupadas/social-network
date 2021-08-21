import { Form, Field, Formik, FormikHelpers } from 'formik';
import React from 'react';
import s from './UsersSearchForm.module.css'
import { FilterType } from '../../redux/users-reducer';

const userSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = ({ onFilterChanged }) => {

  const submit = (values: FilterType, { setSubmitting }: FormikHelpers<{term: string}>) => {
    onFilterChanged(values);
    setSubmitting(false);
  };

  return <div className={s.wrapper}>
    <Formik
      initialValues={{ term: '' }}
      validate={userSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>
}
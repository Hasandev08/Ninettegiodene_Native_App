import { Formik } from 'formik'
import React from 'react'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {() => <>{children}</>}
  </Formik>
)

export default AppForm

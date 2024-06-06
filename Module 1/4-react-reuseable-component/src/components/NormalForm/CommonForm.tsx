import React from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './InputField';

const CommonForm = () => {
  const methods = useForm();
  const { register, handleSubmit, formState: {errors}, watch }  = methods;
  return (
    <div>
      <h1>This is common form</h1>
      <FormProvider {...methods}>
        <InputField/>
      </FormProvider>
    </div>
  )
}

export default CommonForm
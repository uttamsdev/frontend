import React from "react";
import NormalForm from "../components/NormalForm/NormalForm";
import CommonForm from "../components/NormalForm/CommonForm";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "../components/ReuseableForm";
import { FieldValues, useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <NormalForm />
      <CommonForm />

{/* <h2>Reusabel Form</h2> */}
      <Form double={false} onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Home;

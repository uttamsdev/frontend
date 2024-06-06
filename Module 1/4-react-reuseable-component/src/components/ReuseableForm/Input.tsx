import React from "react";

export const Input = ({label, register, errors, type }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor="name">
        {label}
      </label>
      <input
        className="w-full border"
        type={type}
        id="email"
        {...register}
      />
      {errors?.email && (
        <span className="text-xs text-red-500">{errors?.email?.message}</span>
      )}
    </div>
  );
};


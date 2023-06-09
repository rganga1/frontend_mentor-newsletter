import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Form() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues } = useForm();
  return (
    <form
      onSubmit={handleSubmit(() => navigate("/success"))}
      className="w-full">
      <label htmlFor="email" className="text-sm">
        Email address <br />
      </label>
      <input
        {...register("email", {
          required: "This field is required",
          onBlur: () => setValue("email", getValues("email").toUpperCase()),
        })}
        className="w-full max-w-md rounded-lg mt-2 mb-4"
        type="email"
        id="email"
        placeholder="email@company.com"
      />
      <input
        type="submit"
        value="Subscribe to monthly newsletter"
        className="w-full max-w-md rounded-lg bg-black text-white text-sm p-4"
      />
    </form>
  );
}

export default Form;

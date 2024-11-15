import { useForm } from "react-hook-form";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Input from "../../ui/Input";
import { validatePassword } from "../../utils/helper";
import RadioGroup from "../../ui/RadioGroup";
import RadioInput from "../../ui/RadioInput";
import Dropdown from "../../ui/Dropdown";

function AddPersonForm({ roles }) {
  console.log(roles);
  const { register, handleSubmit, formState, getValues } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        label="First Name *"
        type="text"
        id="name"
        error={errors?.firstName?.message}
        register={{
          ...register("firstName", {
            required: "First name is required",
          }),
        }}
      />
      <Input
        label="Last Name *"
        type="text"
        id="lastName"
        error={errors?.lastName?.message}
        register={{
          ...register("lastName", {
            required: "Last name is required",
          }),
        }}
      />
      <Input
        label="Mobile Number *"
        type="number"
        id="phoneNumber"
        error={errors?.phoneNumber?.message}
        register={{
          ...register("phoneNumber", {
            required: "Phone number is required",
          }),
        }}
      />
      <Input
        label="Email *"
        type="email"
        id="email"
        error={errors?.email?.message}
        register={{
          ...register("email", {
            required: "Email is required",
          }),
        }}
      />
      <Input
        label="Password *"
        type="password"
        id="password"
        error={errors?.password?.message}
        register={{
          ...register("password", {
            required: "Password is required",
            validate: (password) =>
              validatePassword(password) ||
              "Password must contain at least 8 character, uppercase lowercase, number and a special character ",
          }),
        }}
      />
      <Input
        label="Confirm Password *"
        type="password"
        id="confirmPassword"
        error={errors?.confirmPassword?.message}
        register={{
          ...register("confirmPassword", {
            required: "This is required",
            validate: (confirmPassword) =>
              confirmPassword === getValues().password ||
              "Password does not match",
          }),
        }}
      />
      <RadioGroup label="Select gender *" error={errors?.gender?.message}>
        <RadioInput
          label="Male"
          value="Male"
          register={{ ...register("gender") }}
        />
        <RadioInput
          label="Female"
          value="Female"
          register={{ ...register("gender") }}
        />
        <RadioInput
          label="Other"
          value="Other"
          register={{ ...register("gender") }}
        />
      </RadioGroup>
      <Dropdown
        label="Select Role *"
        id="roleId"
        error={errors?.roleId?.message}
        register={{
          ...register("roleId", { required: "Role id is required" }),
        }}
      >
        {roles?.map((role) => (
          <option key={role.value} value={role.vale}>
            {role.label}
          </option>
        ))}
      </Dropdown>
      <Input
        label="Is Doctor *"
        type="checkbox"
        id="isDoctor"
        error={errors?.isDoctor?.message}
        register={{
          ...register("isDoctor"),
        }}
      />
      <ButtonPrimary type="submit">Submit</ButtonPrimary>
    </form>
  );
}

export default AddPersonForm;

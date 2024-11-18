import { useForm } from "react-hook-form";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Input from "../../ui/Input";
import { validatePassword } from "../../utils/helper";
import RadioGroup from "../../ui/RadioGroup";
import RadioInput from "../../ui/RadioInput";
import Dropdown from "../../ui/Dropdown";
import useAddUpdatePerson from "./useAddUpdatePerson";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonSecondary from "../../ui/ButtonSecondary";

function AddPersonForm({ roles, onCloseModal }) {
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    defaultValues: {
      firstName: "Saurav",
      lastName: "Adhikari",
      phoneNumber: "9861224028",
      email: "sauravadhikari003@gmail.com",
      gender: "MALE",
      password: "Saurav@123",
      confirmPassword: "Saurav@123",
      roleId: 1,
      isActive: true,
      isDoctor: false,
    },
  });
  const { addUpdatePerson, isPending } = useAddUpdatePerson();

  const { errors } = formState;

  function onSubmit(data) {
    // console.log(data);
    addUpdatePerson(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-1.5 w-[50vw] max-w-sm"
    >
      <Input
        label="First Name *"
        type="text"
        id="name"
        error={errors?.firstName?.message}
        register={{
          ...register("firstName", {
            required: "First name is required",
            disabled: isPending,
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
            disabled: isPending,
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
            disabled: isPending,
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
            disabled: isPending,
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
            disabled: isPending,
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
            disabled: isPending,
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
          register={{
            ...register("gender", {
              disabled: isPending,
            }),
          }}
        />
        <RadioInput
          label="Female"
          value="Female"
          register={{
            ...register("gender", {
              disabled: isPending,
            }),
          }}
        />
        <RadioInput
          label="Other"
          value="Other"
          register={{
            ...register("gender", {
              disabled: isPending,
            }),
          }}
        />
      </RadioGroup>
      <Dropdown
        label="Select Role *"
        id="roleId"
        error={errors?.roleId?.message}
        register={{
          ...register("roleId", {
            required: "Role id is required",
            disabled: isPending,
          }),
        }}
      >
        {roles?.map((role) => (
          <option key={role.value} value={role.value}>
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
          ...register("isDoctor", {
            disabled: isPending,
          }),
        }}
      />
      <ButtonGroup>
        <ButtonSecondary type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </ButtonSecondary>
        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </ButtonGroup>
    </form>
  );
}

export default AddPersonForm;

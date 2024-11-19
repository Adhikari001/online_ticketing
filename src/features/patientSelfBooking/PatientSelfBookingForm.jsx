import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import RadioGroup from "../../ui/RadioGroup";
import RadioInput from "../../ui/RadioInput";
import ButtonPrimary from "../../ui/ButtonPrimary";
import useSelfBooking from "./useSelfBooking";

function PatientSelfBookingForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { addSelfBooking, isPending } = useSelfBooking();

  const { errors } = formState;

  function onSubmit(data) {
    // console.log(data);
    addSelfBooking(data, {
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
        label="Full Name *"
        type="text"
        id="fullName"
        error={errors?.fullName?.message}
        register={{
          ...register("fullName", {
            required: "First name is required",
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
        label="Email"
        type="email"
        id="email"
        error={errors?.email?.message}
        register={{
          ...register("email", {
            disabled: isPending,
          }),
        }}
      />
      <RadioGroup label="Select gender" error={errors?.gender?.message}>
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
      <Input
        label="Date of Birth"
        type="date"
        id="dateOfBirth"
        error={errors?.dateOfBirth?.message}
        register={{
          ...register("dateOfBirth", {
            disabled: isPending,
          }),
        }}
      />
      <Input
        label="Complaint "
        type="text"
        id="complaint"
        error={errors?.complaint?.message}
        register={{
          ...register("complaint", {
            disabled: isPending,
          }),
        }}
      />
      <ButtonPrimary type="submit">Submit</ButtonPrimary>
    </form>
  );
}

export default PatientSelfBookingForm;

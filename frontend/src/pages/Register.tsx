import { useForm } from "react-hook-form";


export type RegisterFormData={
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  confirmPassword:string;

}

const Register = () => {
  const {
    register
  } = useForm<RegisterFormData>();
  return (
    <form className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Create an account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "This field is required" })}
          />
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", { required: "This field is required" })}
          />
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be alteast 6 character",
            },
          })}
        />
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            required: "This field is required",
          })}
        />
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 p-2 text-white font-bold hover:bg-blue-500 "
        >
          Create account
        </button>
      </span>
    </form>
  );
};

export default Register;

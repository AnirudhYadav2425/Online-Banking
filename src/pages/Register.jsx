import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Normally you'd send `data` to the backend here
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("email")} type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
import { useForm } from "react-hook-form";

export default function Transfer() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`Transfer of $${data.amount} to ${data.toAccount} successful.`);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Fund Transfer</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("toAccount")} placeholder="Recipient Account" className="w-full border p-2 rounded" />
        <input {...register("amount")} type="number" placeholder="Amount" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
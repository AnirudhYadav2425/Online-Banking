import TransactionTable from "../components/TransactionTable";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <TransactionTable />
    </div>
  );
}
import mockData from "../assets/mock/transactions.json";

export default function TransactionTable() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Type</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map(txn => (
            <tr key={txn.id} className="text-center">
              <td className="p-2 border">{txn.date}</td>
              <td className="p-2 border">{txn.description}</td>
              <td className={`p-2 border ${txn.amount < 0 ? "text-red-600" : "text-green-600"}`}>{txn.amount}</td>
              <td className="p-2 border capitalize">{txn.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
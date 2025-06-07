export default function Profile() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="New Password" className="w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
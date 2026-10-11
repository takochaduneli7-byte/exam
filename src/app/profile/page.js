async function getUserProfile() {
  const res = await fetch('https://fakestoreapi.com/users/3', {
    cache: 'no-store', // Server-side fetching
  });
  if (!res.ok) throw new Error('Failed to fetch user profile');
  return res.json();
}

export default async function ProfilePage() {
  const user = await getUserProfile();

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold uppercase">
          {user.name?.firstname?.[0]}{user.name?.lastname?.[0]}
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800 uppercase">
            {user.name?.firstname} {user.name?.lastname}
          </h1>
          <p className="text-slate-500 text-sm">@{user.username}</p>
        </div>
      </div>

      <div className="space-y-4 border-t border-slate-100 pt-4 text-sm">
        <div>
          <span className="text-slate-400 block text-xs">ელ-ფოსტა</span>
          <p className="font-medium text-slate-700">{user.email}</p>
        </div>
        <div>
          <span className="text-slate-400 block text-xs">ტელეფონი</span>
          <p className="font-medium text-slate-700">{user.phone}</p>
        </div>
        <div>
          <span className="text-slate-400 block text-xs">მისამართი</span>
          <p className="font-medium text-slate-700">
            {user.address?.city}, {user.address?.street} N{user.address?.number}
          </p>
        </div>
      </div>
    </div>
  );
}
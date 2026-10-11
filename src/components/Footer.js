export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} FakeStore. All rights reserved.
      </div>
    </footer>
  );
}
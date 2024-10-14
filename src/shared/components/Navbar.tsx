const Navbar = () => {
  return <div className="flex h-16 justify-between px-5 items-center border-b-2 border-gray-600 mb-5">
    <div className="text-4xl font-semibold">My Space</div>
    <div className="flex gap-2">
        <button className="bg-gray-900 py-2 px-3 rounded-lg hover:opacity-80">Dark</button>
        <button className="bg-gray-900 py-2 px-3 rounded-lg hover:opacity-80">Light</button>
    </div>
  </div>;
};

export default Navbar;

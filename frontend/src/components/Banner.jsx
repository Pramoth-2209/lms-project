export default function Banner() {
  return (
    <div className="flex h-screen bg-white text-black">

      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 p-6">

        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold">
            Welcome Back
          </h2>

          <p className="text-sm text-gray-500">
            Home page
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p></p>
          <p></p>
          <p></p>
        </div>

      </main>
    </div>
  );
}
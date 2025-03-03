export default function SearchPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-300 text-white">
      <h1 className="text-3xl font-bold mb-8">Clima</h1>
      <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-2 w-80">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-3 py-2 text-black outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Buscar</button>
      </div>
    </div>
  );
}
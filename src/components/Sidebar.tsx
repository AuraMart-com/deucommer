export default function Sidebar() {
  const categories = ["Electronics", "Fashion", "Sports", "Books"];
  
  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-xl shadow-sm h-fit">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li 
            key={category}
            className="px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-orange-500 rounded-lg cursor-pointer transition-colors"
            onClick={() => console.log(`Selected Category: ${category}`)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

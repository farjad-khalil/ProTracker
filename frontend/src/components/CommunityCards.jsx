

export default function CommunityCards({Cards}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {Cards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${card.bg}`}>
              {card.icon}
            </div>
            <div>
              <h3 className="text-neutral-800 text-xs">{card.title}</h3>
              <p className="text-gray-700 text-xl font-semibold">{card.count}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-black transition">
            ⋮
          </button>
        </div>
      ))}
    </div>
  );
}

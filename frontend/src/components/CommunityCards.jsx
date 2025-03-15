import { Users, UserPlus, Heart, UserCircle } from "lucide-react";

const userCards = [
  { title: "Friends", count: 250, icon: <Users className="text-purple-500" />, bg: "bg-purple-800/20" },
  { title: "Requests", count: 15, icon: <UserPlus className="text-yellow-500" />, bg: "bg-yellow-800/20" },
  { title: "Favorites", count: 200, icon: <Heart className="text-green-500" />, bg: "bg-green-800/20" },
  { title: "Other Users", count: 35, icon: <UserCircle className="text-blue-500" />, bg: "bg-blue-800/20" },
];

export default function CommunityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {userCards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${card.bg}`}>
              {card.icon}
            </div>
            <div>
              <h3 className="text-black text-xs">{card.title}</h3>
              <p className="text-gray-900 text-xl font-semibold">{card.count}</p>
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

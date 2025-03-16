import CommunityCards from "../CommunityCards";
import CommunityTable from "../CommunityTable";
import { Users, UserPlus, Heart, UserCircle } from "lucide-react";

const userCards = [
    { title: "Friends", count: 250, icon: <Users className="text-purple-500" />, bg: "bg-purple-800/20" },
    { title: "Requests", count: 15, icon: <UserPlus className="text-yellow-500" />, bg: "bg-yellow-800/20" },
    { title: "Favorites", count: 200, icon: <Heart className="text-green-500" />, bg: "bg-green-800/20" },
    { title: "Other Users", count: 35, icon: <UserCircle className="text-blue-500" />, bg: "bg-blue-800/20" },
  ];
export default function Community() {
    return (
        <div className="min-h-screen pt-24 px-10 ">
            <CommunityCards Cards={userCards} />
            <CommunityTable />
        </div>
    );
}

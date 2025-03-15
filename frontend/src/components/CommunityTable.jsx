import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ActivitySquare, ChartArea, MessageSquareText } from "lucide-react";
const friends = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      workoutStreak: 15,
      status: "Active",
    },
    {
      id: 2,
      name: "Sophie Miller",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      workoutStreak: 30,
      status: "Active",
    },
    {
      id: 3,
      name: "Daniel Carter",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      workoutStreak: 7,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      workoutStreak: 22,
      status: "Active",
    },
    {
      id: 5,
      name: "Liam Brown",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      workoutStreak: 0,
      status: "Inactive",
    },
    {
      id: 6,
      name: "Olivia Davis",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      workoutStreak: 10,
      status: "Active",
    },
    {
      id: 7,
      name: "Ethan Wilson",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      workoutStreak: 18,
      status: "Active",
    },
    {
      id: 8,
      name: "Mia Taylor",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      workoutStreak: 5,
      status: "Inactive",
    },
    {
      id: 9,
      name: "Noah Harris",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
      workoutStreak: 25,
      status: "Active",
    },
    {
      id: 10,
      name: "Ava Martin",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      workoutStreak: 3,
      status: "Inactive",
    },
  ];
  

export default function CommunityTable() {
    return (
        <div className="bg-white rounded-lg mx-4  cursor-default">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-10"> </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Workout Streak </TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="text-right">Chat</TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {friends.map((friend,i) => (
                        <TableRow key={friend.id} className={` ${i%2 === 0? "bg-gray-100" : ""
                                }`}>
                            <TableCell ><img className="w-8 rounded-full" src={friend.avatar}></img></TableCell>
                            <TableCell className="font-medium ">{friend.name}</TableCell>
                            <TableCell >{friend.workoutStreak}</TableCell>
                                <TableCell ><div className={`text-center capitalize cursor-pointer px-2 py-[2px] w-18 rounded-lg ${friend.status === "Inactive" ? "bg-red-100 text-red-800 hover:bg-red-200":"bg-green-100 text-green-800 hover:bg-green-200"}`}>{friend.status}</div></TableCell>
                            <TableCell className="flex justify-end  text-cyan-600 hover:text-cyan-800"><MessageSquareText className="cursor-pointer" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
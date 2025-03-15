import CommunityCards from "../CommunityCards";
import CommunityTable from "../CommunityTable";

export default function Community() {
    return (
        <div className="min-h-screen pt-24 px-10 ">
            <CommunityCards />
            <CommunityTable />
        </div>
    );
}

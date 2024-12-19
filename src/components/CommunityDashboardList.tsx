import { CommunitySmallCard } from "./CommunitySmallCard";

export function CommunityDashboardList({ communities }) {
  return (
    <div className="flex overflow-x-auto gap-4">
      {communities.map((community) => (
        <div key={community.id} className="flex flex-row items-center gap-4">
          <CommunitySmallCard community={community} />
        </div>
      ))}
    </div>
  );
}

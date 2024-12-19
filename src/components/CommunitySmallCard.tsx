import { Card } from "./ui/card";

export function CommunitySmallCard({ community }) {
  return (
    <Card
      className="flex-shrink-0 w-60 p-4 border border-muted rounded-lg bg-background hover:shadow-md cursor-pointer transition-transform duration-300"
      // onClick={() => onEdit(community.id)}
    >
      <div className="text-muted-foreground text-sm mb-2">
        {new Date(community.createdAt).toLocaleDateString()}
      </div>
      <div className="font-semibold text-lg mb-2">{community.name}</div>
      <div className="text-muted-foreground text-sm mb-2">
        {community.description}
      </div>
      {/* <div className="text-muted-foreground text-sm mb-2">Members: {community.members.length}</div> */}
    </Card>
  );
}

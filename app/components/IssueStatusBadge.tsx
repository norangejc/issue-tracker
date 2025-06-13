import { Badge } from "@radix-ui/themes";
import { Status } from "../generated/prisma";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "blue" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "blue" },
  CLOSED: { label: "Closed", color: "green" },
};

function IssueStatusBadge({ status }: { status: Status }) {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
}

export default IssueStatusBadge;

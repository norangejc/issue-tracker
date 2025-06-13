import { Card, Flex, Text } from "@radix-ui/themes";
import { Status } from "./generated/prisma";
import Link from "next/link";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
function IssueSummary({ open, inProgress, closed }: Props) {
  const statuses: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex gap="4">
      {statuses.map((status) => (
        <Card key={status.label}>
          <Flex direction="column" gap="1">
            <Link
              href={`/issues/list?status=${status.status}`}
              className="text-sm font-medium"
            >
              {status.label}
            </Link>
            <Text size="5" className="font-bold">
              {status.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}

export default IssueSummary;

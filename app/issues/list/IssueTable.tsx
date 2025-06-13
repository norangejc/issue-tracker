import { IssueStatusBadge } from "@/app/components";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import NextLink from "next/link";
import { Issue, Status } from "@/app/generated/prisma";

export interface IssueQuery {
  status?: Status;
  orderBy?: string;
  page: string;
}
interface Props {
  searchParams: Promise<IssueQuery>;
  issues: Issue[];
}

async function IssueTable({ searchParams, issues }: Props) {
  const query = await searchParams;

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className}
            >
              <NextLink
                href={{
                  query: { ...query, orderBy: column.value },
                }}
              >
                {" "}
                {column.label}
              </NextLink>
              {column.value === query.orderBy && (
                <FaArrowUp className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>

              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
];

export const validColumnKeys = columns.map((c) => c.value);

export default IssueTable;

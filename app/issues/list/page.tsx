import { prisma } from "@/prisma/client";
import IssueActions from "./IssueActions";
import { Issue, Status } from "@/app/generated/prisma";
import Pagination from "@/app/components/Pagination";
import IssueTable, { IssueQuery, validColumnKeys } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

function isValidStatus(value: any): value is Status {
  return Object.values(Status).includes(value);
}
interface Props {
  searchParams: Promise<IssueQuery>;
}

async function IssuePage({ searchParams }: Props) {
  const query = await searchParams;
  const validStatus = isValidStatus(query.status) ? query.status : undefined;
  const validOrder =
    query.orderBy && validColumnKeys.includes(query.orderBy as keyof Issue)
      ? { [query.orderBy]: "asc" }
      : undefined;

  query.orderBy ? { [query.orderBy]: "asc" } : undefined;

  const page = parseInt(query.page) || 1;
  const pageSize = 7;

  const issues = await prisma.issue.findMany({
    where: {
      status: validStatus,
    },
    orderBy: validOrder,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({
    where: {
      status: validStatus,
    },
  });
  return (
    <Flex direction="column" gap="4">
      <IssueActions />
      <IssueTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        itemCount={issueCount}
        pageSize={pageSize}
      />
    </Flex>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View a list of project issues",
};

export default IssuePage;

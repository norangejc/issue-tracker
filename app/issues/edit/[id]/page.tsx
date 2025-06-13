import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormClientWrapper from "./IssueFormClientWrapper";

interface Props {
  params: Promise<{ id: string }>;
}
async function EditIssuePage({ params }: Props) {
  const id = Number((await params).id);
  const issue = await prisma.issue.findUnique({
    where: { id },
  });
  if (!issue) notFound();
  return <IssueFormClientWrapper issue={issue} />;
}

export default EditIssuePage;

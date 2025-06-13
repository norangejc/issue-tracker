"use client";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import { Issue } from "@/app/generated/prisma";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  issue: Issue;
}

export default function IssueFormClientWrapper({ issue }: Props) {
  return <IssueForm issue={issue} />;
}

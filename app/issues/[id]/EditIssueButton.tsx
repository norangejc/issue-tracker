import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { HiMiniPencilSquare } from "react-icons/hi2";

function EditIssueButton({ issueId }: { issueId: number }) {
  return (
    <Button>
      <HiMiniPencilSquare />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
}

export default EditIssueButton;

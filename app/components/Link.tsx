import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";

interface Props {
  href: string;
  children: string;
}

function Link({ href, children }: Props) {
  return (
    <RadixLink asChild>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  );
}

export default Link;

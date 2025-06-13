"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Skeleton from "@/app/components/Skeleton";

function NavBar() {
  return (
    <nav className=" border-b border-b-gray-200 mb-5 px-5 py-5">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug size={20} />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
}
function NavLinks() {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <ul className="flex space-x-5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-700 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function AuthStatus() {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="3rem" />;
  if (status === "authenticated")
    return (
      <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session.user!.image!}
              fallback={`${session.user?.name![0]}`}
              radius="full"
              className="cursor-pointer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{session.user?.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    );
  if (status === "unauthenticated")
    return (
      <Link href="/api/auth/signin" className="nav-link">
        Log in
      </Link>
    );
}

export default NavBar;

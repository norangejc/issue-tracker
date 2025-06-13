"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
function Pagination({ itemCount, pageSize, currentPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <Flex align="center" gap="4">
      <Text>
        Page {currentPage} of {pageCount}{" "}
      </Text>

      <Button
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <FaAnglesLeft />
      </Button>
      <Button
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <FaChevronLeft />
      </Button>
      <Button
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <FaChevronRight />
      </Button>
      <Button
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <FaAnglesRight />
      </Button>
    </Flex>
  );
}

export default Pagination;

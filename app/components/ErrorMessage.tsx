import { Text } from "@radix-ui/themes";
import { PropsWithChildren, ReactNode } from "react";

function ErrorMessage({ children }: PropsWithChildren) {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}

export default ErrorMessage;

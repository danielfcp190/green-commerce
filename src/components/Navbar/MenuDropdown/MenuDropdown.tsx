import React, { Children } from "react";
import { Box, Link } from "@chakra-ui/react";

type Props = {
  shown: boolean;
  children: React.ReactNode;
};

export default function MenuDropdown({ shown, children }: Props) {
  return (
    <Box
      display={shown ? "flex" : "none"}
      justifyContent={"flex-end"}
      position={"absolute"}
      left={"0"}
      top="10px"
      width={"266px"}
      height={"274px"}
      zIndex={100}
    >
      {children}
    </Box>
  );
}

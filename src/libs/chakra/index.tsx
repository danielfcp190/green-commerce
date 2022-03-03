import { Props } from "./types";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraUIProvider = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraUIProvider;

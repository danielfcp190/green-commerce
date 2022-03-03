import { LayoutAppProps } from "next/app";
import Default from "@global-layouts/Default";
import DesignSystemProvider from "@global-libs/styled-components";
import "@fonts/roboto/font-faces.css";
import ChakraUIProvider from "@global-libs/chakra";
import { CartProvider } from "@global-contexts/CartContext";
import useLocalStorage from "@global-hooks/useLocalStorage";

export default function App({ Component, pageProps }: LayoutAppProps) {
  const Layout = Component.Layout ?? Default;

  const [cart, setCart] = useLocalStorage("cart", []);

  return (
    <CartProvider value={{ cart, setCart }}>
      <DesignSystemProvider>
        <ChakraUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraUIProvider>
      </DesignSystemProvider>
    </CartProvider>
  );
}

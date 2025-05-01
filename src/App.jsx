import "@fontsource/dm-mono";

import { RouterProvider } from "react-router";

import { SnackbarProvider } from "notistack";

import { router } from "@/routes";
import { CartProvider } from "@/features/cart/context/CartContext";

import { ThemeCustomization } from "./theme";

function App() {
  return (
    <ThemeCustomization>
      <SnackbarProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </SnackbarProvider>
    </ThemeCustomization>
  );
}

export default App;

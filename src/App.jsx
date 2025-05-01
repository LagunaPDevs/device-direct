import '@fontsource/dm-mono';

import { RouterProvider } from "react-router";

import { router } from "@/routes";
import { CartProvider } from "@/features/cart/context/CartContext";

import { ThemeCustomization } from "./theme";

function App() {
  return (
    <ThemeCustomization>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeCustomization>
  );
}

export default App;

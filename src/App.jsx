import { RouterProvider } from "react-router";

import { router } from "@/routes";
import { CartProvider } from "@/features/cart/context/CartContext";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

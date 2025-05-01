import { Stack, Box } from "@mui/material";

import { useCart } from "@/features/cart/hooks/useCart";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function CartIconButton() {
  const { cartItems } = useCart();

  const showBubble = cartItems.length > 0;
  
  return (
    <Stack
      sx={{
        position: 'relative', 
        width: 'fit-content', 
      }}
      onClick={()=> {
        console.log(cartItems);
      }}
    >
      <ShoppingCartIcon />
      {showBubble && <Box
        onClick={() => {}}
        sx={{
          position: 'absolute', 
          top: -10, 
          right: -10, 
          backgroundColor: "red",
          color: 'white', 
          width: '20px', 
          height: '20px', 
          borderRadius: '50%', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '0.8rem'   }}
      >
        {cartItems.length}
      </Box>}
    </Stack>
  );
}
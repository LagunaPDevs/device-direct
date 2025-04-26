import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useGetProductById } from "../hooks/useGetProductById";

export function ProductStorageVariants() {
  const { product, selectedStorage, setSelectedStorage } = useGetProductById();
  return (
    <FormControl fullWidth>
      <InputLabel id="product-storage">Storage</InputLabel>
      <Select
        labelId="product-storage"
        id="product-storage"
        value={selectedStorage}
        label="Storage"
        onChange={(e) => setSelectedStorage(e.target.value)}
      >
        {product.options.storages.map((storage) => (
          <MenuItem key={storage.code} value={storage.code.toString()}>
            {storage.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

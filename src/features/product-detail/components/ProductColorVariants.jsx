import {useState} from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useGetProductById } from "../hooks/useGetProductById";


export function ProductColorVariants() {
  const { product, selectedColor, setSelectedColor } = useGetProductById();
  return (
    <FormControl fullWidth>
      <InputLabel id="product-color">Color</InputLabel>
      <Select
        labelId="product-color"
        id="product-color"
        value={selectedColor}
        label="Color"
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {product.options.colors.map((color) => (
          <MenuItem key={color.code} value={color.code.toString()}>
            {color.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

import { Box } from "@mui/material";

import { ProductFeatureItem } from "./ProductFeatureItem";
import { ProductVariantsSelector } from "./ProductVariantsSelector";

export function ProductFeatures({ product }) {
  const {
    brand,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCamera,
    dimentions,
    weight,
  } = product;
  
  return (
    <Box
      gap={2}
      sx={{
        gap: 2,
        width: { xs: "100%", md: "60%" },
        height: "100%",
      }}
    >
      <ProductFeatureItem title="Brand" value={brand} />
      <ProductFeatureItem title="CPU" value={cpu} />
      <ProductFeatureItem title="RAM" value={ram} />
      <ProductFeatureItem title="Operative System" value={os} />
      <ProductFeatureItem
        title="Display Resolution"
        value={displayResolution}
      />
      <ProductFeatureItem title="Battery" value={battery} />
      <ProductFeatureItem title="Primary Camera" value={primaryCamera} />
      <ProductFeatureItem title="Secondary Camera" value={secondaryCamera} />
      <ProductFeatureItem title="Dimentions" value={dimentions} />
      <ProductFeatureItem title="Weight" value={weight} />

      <ProductVariantsSelector />
    </Box>
  );
}

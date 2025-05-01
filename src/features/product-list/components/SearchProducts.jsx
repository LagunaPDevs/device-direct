import { Box, Grid } from "@mui/material";
import { useGetProducts } from "@/features/product-list/hooks/useGetProducts";

import { Search } from "@/components/inputs/SearchInput";
import { FilterSelector } from "./FilterSelector";

export function SearchProducts() {
  const { searchInput, setSearchInput } = useGetProducts();

  return (
    <Grid container gap={2} alignItems="baseline">
      <Grid>
        <FilterSelector />
      </Grid>
      <Search
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </Grid>
  );
}

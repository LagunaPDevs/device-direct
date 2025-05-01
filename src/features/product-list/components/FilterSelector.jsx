import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Button,
  Chip,
  Grid,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";

import { usePopover } from "@/hooks/usePopover";
import { useGetProducts } from "@/features/product-list/hooks/useGetProducts";

export function FilterSelector() {
  const { anchorRef, open, handleOpenClose } = usePopover();

  return (
    <Grid container>
      <Grid container direction="column" gap={1} alignItems="center">
        <FiltersButton {...{ anchorRef, handleOpenClose }} />
        <SelectedFilter />
      </Grid>
      <FiltersPopover {...{ anchorRef, handleOpenClose, open }} />
    </Grid>
  );
}

function SelectedFilter() {
  const { selectedFilter, searchInput } = useGetProducts();
  if (searchInput === "") return;
  return <Chip color="primary" label={selectedFilter} />;
}

function FiltersButton({ anchorRef, handleOpenClose }) {
  return (
    <Grid>
      <Grid>
        <Button variant="outlined" ref={anchorRef} onClick={handleOpenClose}>
          <Grid container alignItems="center" spacing={1}>
            <FilterAltIcon />
            <Typography variant="body2">Filters</Typography>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
}

function FiltersPopover({ anchorRef, handleOpenClose, open }) {
  const { selectedFilter, setSelectedFilter } = useGetProducts();
  return (
    <Popover
      open={open}
      anchorEl={anchorRef?.current}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={handleOpenClose}
    >
      <MenuItem
        key="model"
        value="model"
        selected={selectedFilter === "model"}
        component={Button}
        onClick={() => setSelectedFilter("model")}
      >
        Model
      </MenuItem>
      <MenuItem
        key="brand"
        value="brand"
        selected={selectedFilter === "brand"}
        component={Button}
        onClick={() => setSelectedFilter("brand")}
      >
        Brand
      </MenuItem>
    </Popover>
  );
}

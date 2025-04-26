import {useGetProducts} from "@/features/product-list/hooks/useGetProducts";

import { Search } from "@/components/inputs/SearchInput";

export function SearchProducts() {
    const {searchInput, setSearchInput} = useGetProducts();

    return <Search value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} />
}
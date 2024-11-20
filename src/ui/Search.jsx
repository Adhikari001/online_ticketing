import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState(searchParam.get("search") || "");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search) {
        searchParam.set("search", search);
        setSearchParam(searchParam);
      }
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search, setSearchParam, searchParam]);

  return (
    <input
      className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
      type="text"
      id="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;

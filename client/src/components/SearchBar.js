import { useState, useEffect } from "react";

const SearchBar = ({
  search,
  setSearch
}) => {
  const [value, setValue] = useState(
    search || ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (setSearch) {
        setSearch(value);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value, setSearch]);

  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search blogs..."
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
      />

    </div>
  );
};

export default SearchBar;
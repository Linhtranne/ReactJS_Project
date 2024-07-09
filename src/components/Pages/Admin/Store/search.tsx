//thanh tim kiem
import React from "react";
import {SearchBarProps} from "../../Interface/interface"
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
      type="text"
      placeholder="Search users..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
    );
  };
  
  export default SearchBar;
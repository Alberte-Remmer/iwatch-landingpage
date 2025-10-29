import { FiSearch } from "react-icons/fi";

const SearchButton = ({ color }) => (
  <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
    <FiSearch size={30} color={color} />
  </button>
);

export default SearchButton;

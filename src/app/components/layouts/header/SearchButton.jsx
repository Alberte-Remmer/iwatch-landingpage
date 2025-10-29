import { FiSearch } from "react-icons/fi";

const SearchButton = () => (
  <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
    <FiSearch size={30} color="#fff" />
  </button>
);

export default SearchButton;

import { FiSearch } from "react-icons/fi";

const SearchButton = ({ color }) => (
  <button
    className="mx-4 cursor-pointer border-none bg-none p-0"
    //style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
  >
    <FiSearch size={30} color={color} />
  </button>
);

export default SearchButton;

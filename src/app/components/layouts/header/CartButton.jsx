import { FiShoppingBag } from "react-icons/fi";

const CartButton = ({ color }) => (
  <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
    <FiShoppingBag size={30} color={color} />
  </button>
);

export default CartButton;

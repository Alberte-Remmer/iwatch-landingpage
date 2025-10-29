import { FiShoppingBag } from "react-icons/fi";

const CartButton = () => (
  <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
    <FiShoppingBag size={30} color="#fff" />
  </button>
);

export default CartButton;

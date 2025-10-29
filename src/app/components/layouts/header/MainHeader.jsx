import Logo from "../../ui/icons/Logo";
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import Nav from "./Nav";

const MainHeader = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      <Logo />
      <Nav />
      <div style={{ display: "flex" }}>
        <SearchButton />
        <span
          style={{
            width: "2px",
            height: "32px",
            background: "#fff",
            margin: "0 1rem",
            display: "inline-block",
          }}
        ></span>
        <CartButton />
      </div>
    </div>
  );
};

export default MainHeader;

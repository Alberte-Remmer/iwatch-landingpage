import Logo from "../../ui/icons/Logo";
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import Nav from "./Nav";

const MainHeader = () => {
  return (
    <div
      className="mb-12! flex flex-row items-center justify-between py-8!"
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   alignItems: "center",
      //   justifyContent: "space-between",
      //   padding: "1rem 0",
      // }}
    >
      <Logo />
      <Nav />
      <div className="flex gap-3">
        <SearchButton color="var(--color-secondary)" />
        <span
          className="mx-4 inline-block h-8 w-0.5 bg-secondary"
          // style={{
          //   width: "2px",
          //   height: "32px",
          //   background: "#fff",
          //   margin: "0 1rem",
          //   display: "inline-block",
          // }}
        ></span>
        <CartButton color="var(--color-secondary)" />
      </div>
    </div>
  );
};

export default MainHeader;

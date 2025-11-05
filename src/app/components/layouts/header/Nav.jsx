const Nav = () => {
  // Tailwind klasser som variabel for genbrug
  const linkClasses =
    "text-secondary hover:bg-secondary hover:text-primary hover:border-secondary rounded-3xl border-2 border-transparent !px-4 !py-2 no-underline transition-all duration-200 hover:border-2";

  return (
    <nav>
      <ul
        className="flex list-none items-center justify-center gap-8"
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: "30px",
        //   listStyle: "none",
        // }}
      >
        <li>
          <a href="#0" className={linkClasses}>
            Mac
          </a>
        </li>
        <li>
          <a href="#0" className={linkClasses}>
            iphone
          </a>
        </li>
        <li>
          <a href="#0" className={linkClasses}>
            ipad
          </a>
        </li>
        <li>
          <a href="#0" className={linkClasses}>
            iwatch
          </a>
        </li>
        <li>
          <a href="#0" className={linkClasses}>
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

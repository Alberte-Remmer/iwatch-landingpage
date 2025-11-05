const PrimaryButton = ({ text }) => {
  return (
    <button
      className="cursor-pointer rounded-full border-2 border-secondary px-12! py-3! text-secondary transition-colors hover:bg-secondary hover:text-primary"
      //style={{ padding: "0.75rem 3rem", borderRadius: "50px", cursor: "pointer" }}
    >
      <a
        className="no-underline"
        // style={{ textDecoration: "none" }}
        href="#0"
      >
        {text}
      </a>
    </button>
  );
};

export default PrimaryButton;

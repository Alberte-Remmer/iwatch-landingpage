const PrimaryButton = ({ text }) => {
  return (
    <button className="primary-button" style={{ padding: "0.75rem 3rem", borderRadius: "50px", cursor: "pointer" }}>
      <a style={{ textDecoration: "none" }} href="#0">
        {text}
      </a>
    </button>
  );
};

export default PrimaryButton;

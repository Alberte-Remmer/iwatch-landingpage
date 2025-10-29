const ShiftPageButton = ({ number }) => {
  return (
    <button className="shift-page-button" style={{ background: "none", border: "none", cursor: "pointer" }}>
      ← {number} →
    </button>
  );
};

export default ShiftPageButton;

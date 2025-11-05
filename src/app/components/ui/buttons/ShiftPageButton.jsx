const ShiftPageButton = ({ number }) => {
  return (
    <button className="cursor-pointer border-none bg-transparent text-xl text-secondary">
      ← {number} →
    </button>
  );
};

export default ShiftPageButton;

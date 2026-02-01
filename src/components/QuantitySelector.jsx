import "./QuantitySelector.css";

const QuantitySelector = ({ value, onChange, min = 0, max = 10, size = "md" }) => {
  const clamp = (num) => Math.min(max, Math.max(min, num));

  const handleInputChange = (event) => {
    const raw = event.target.value.trim();
    if (raw === "") {
      onChange(min);
      return;
    }

    if (!/^-?\d+$/.test(raw)) return;
    const parsed = parseInt(raw, 10);
    onChange(clamp(parsed));
  };

  const adjust = (delta) => {
    onChange(clamp(value + delta));
  };

  return (
    <div className={`quantity-selector ${size}`}>
      <button
        type="button"
        className="quantity-btn"
        onClick={() => adjust(-1)}
        aria-label="Decrease quantity"
        disabled={value <= min}
      >
        -
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={handleInputChange}
        className="quantity-input"
        aria-label="Quantity"
      />
      <button
        type="button"
        className="quantity-btn"
        onClick={() => adjust(1)}
        aria-label="Increase quantity"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

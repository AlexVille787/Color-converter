import React from "react";
import type { ConversionState } from "../types";

interface ColorConverterProps {
  hexValue: string;
  onChange: (value: string) => void;
  state: ConversionState;
}

export const ColorConverter: React.FC<ColorConverterProps> = ({
  hexValue,
  onChange,
  state,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!value.startsWith("#")) {
      value = "#" + value.replace(/#/g, "");
    }

    if (value.length <= 7) {
      onChange(value);
    }
  };

  return (
    <div className="converter-container">
      <input
        type="text"
        className="hex-input"
        value={hexValue}
        onChange={handleInputChange}
        placeholder="#000000"
        autoFocus
      />

      <div
        className={`result-box ${state.status === "error" ? "error-bg" : ""}`}
      >
        {state.status === "idle" && <span>&nbsp;</span>}
        {state.status === "error" && <span>Ошибка!</span>}
        {state.status === "success" && (
          <span>
            rgb({state.rgb.r}, {state.rgb.g}, {state.rgb.b})
          </span>
        )}
      </div>
    </div>
  );
};

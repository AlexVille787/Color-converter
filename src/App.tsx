import { useState, useEffect } from "react";
import { ColorConverter } from "./components/ColorConverter";
import type { ConversionState } from "./types";
import "./App.css";

function App() {
  const [hexInput, setHexInput] = useState<string>("#");
  const [state, setState] = useState<ConversionState>({ status: "idle" });

  const [bgColor, setBgColor] = useState<string>("#34495e");

  useEffect(() => {
    if (hexInput.length !== 7) {
      setState({ status: "idle" });
      return;
    }

    const hexRegex = /^#([0-9A-Fa-f]{6})$/;

    if (hexRegex.test(hexInput)) {
      const r = parseInt(hexInput.slice(1, 3), 16);
      const g = parseInt(hexInput.slice(3, 5), 16);
      const b = parseInt(hexInput.slice(5, 7), 16);

      setState({ status: "success", rgb: { r, g, b } });
      setBgColor(hexInput);
    } else {
      setState({ status: "error" });
      setBgColor("#b83d2b");
    }
  }, [hexInput]);

  return (
    <div className="app-wrapper" style={{ backgroundColor: bgColor }}>
      <main className="main-content">
        <ColorConverter
          hexValue={hexInput}
          onChange={setHexInput}
          state={state}
        />
      </main>
    </div>
  );
}

export default App;

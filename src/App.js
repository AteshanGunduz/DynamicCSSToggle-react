import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("diactive");

  const handleClass = () => {
    setColor(color === "diactive" ? "active" : "diactive");
  };

  return (
    <div>
      <p className={color}>Style ver</p>
      <button onClick={handleClass}>Toggle style</button>
    </div>
  );
}

// src/App.jsx
import { useEffect, useState } from "react";
import flood_output from "../../flood_output.json";

type FloodZone = {
  location: string;
  risk_level: string;
};
function App() {
  const [floodZones, setFloodZones] = useState<FloodZone[]>([]);

  useEffect(() => {
    setFloodZones(flood_output.flood_zones);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🌊 พื้นที่เสี่ยงน้ำท่วม จังหวัดน่าน</h1>
      <ul>
        {floodZones.map((zone, i) => (
          <li key={i}>
            📍 <strong>{zone.location}</strong> — ระดับความเสี่ยง:{" "}
            <span
              style={{ color: zone.risk_level === "high" ? "red" : "orange" }}
            >
              {zone.risk_level === "high" ? "สูง" : "ปานกลาง"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

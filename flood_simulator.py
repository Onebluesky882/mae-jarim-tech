# flood_simulator.py
import json

# จำลองข้อมูลน้ำท่วมพื้นฐาน (ตัวอย่าง)
simulated_data = {
    "flood_zones": [
        {"location": "อ.เฉลิมพระเกียรติ", "risk_level": "high"},
        {"location": "อ.บ่อเกลือ", "risk_level": "medium"}
    ]
}
output_path = "frontend/public/json/flood_output.json" 
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(simulated_data, f, ensure_ascii=False, indent=2)

print("✅ Flood simulation complete! Output: flood_output.json")

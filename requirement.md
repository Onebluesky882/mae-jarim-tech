# =====================================

# requirements.txt

# =====================================

# Core dependencies

numpy>=1.21.0
rasterio>=1.3.0
geopandas>=0.12.0
pandas>=1.5.0
shapely>=1.8.0

# Optional but recommended

whitebox>=2.2.0
matplotlib>=3.5.0
folium>=0.14.0

# Web framework (choose one)

fastapi>=0.95.0
uvicorn>=0.20.0

# OR

# flask>=2.2.0

# Development tools

jupyter>=1.0.0
notebook>=6.4.0

# =====================================

# package.json (for web interface)

# =====================================

{
"name": "nan-flood-simulator",
"version": "1.0.0",
"description": "Simple flood simulator for Nan Province",
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
},
"dependencies": {
"next": "^14.0.0",
"react": "^18.0.0",
"react-dom": "^18.0.0",
"leaflet": "^1.9.0",
"react-leaflet": "^4.2.0"
},
"devDependencies": {
"@types/leaflet": "^1.9.0",
"@types/node": "^20.0.0",
"@types/react": "^18.0.0",
"@types/react-dom": "^18.0.0",
"eslint": "^8.0.0",
"eslint-config-next": "^14.0.0",
"typescript": "^5.0.0"
}
}

# =====================================

# project_structure.txt

# =====================================

nan-flood-simulator/
├── backend/
│ ├── main.py # FastAPI server
│ ├── flood*simulator.py # Core simulation logic
│ └── requirements.txt
├── frontend/
│ ├── pages/
│ │ └── index.tsx # Main page
│ ├── components/
│ │ ├── FloodMap.tsx # Leaflet map component
│ │ └── ControlPanel.tsx # User controls
│ ├── public/
│ └── package.json
├── data/
│ ├── nan_dem.tif # DEM data (download manually)
│ ├── flow_acc.tif # Generated flow accumulation
│ └── flood*\*.geojson # Generated flood data
└── README.md

# =====================================

# Quick Start Guide

# =====================================

## 🚀 Getting Started

### 1. Setup Python Environment

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# OR
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt
```

### 2. Run Python Simulation

```bash
python flood_simulator.py
```

### 3. Setup Web Interface (Optional)

```bash
cd frontend
npm install
npm run dev
```

### 4. Get Real DEM Data

1. Go to: https://earthdata.nasa.gov/
2. Create free account
3. Search for "SRTM 30m"
4. Download tiles covering Nan Province:
   - Latitude: 18.5°N to 19.8°N
   - Longitude: 100.3°E to 101.2°E
5. Save as `data/nan_dem.tif`

## 📊 Expected Outputs

After running the script, you'll get:

- `flow_acc.tif` - Flow accumulation raster
- `flood_XXmm.tif` - Flood depth for each rainfall scenario
- `flood_XXmm.geojson` - Web-ready flood polygons
- `simulation_summary.json` - Statistics summary

## 🔧 Customization

### Change Rainfall Scenarios

Edit line in `main()` function:

```python
scenarios = [25, 50, 100, 150, 200]  # Add more scenarios
```

### Adjust Flood Threshold

In `simulate_flood()` method:

```python
threshold_factor = 0.7  # Lower = more sensitive to flooding
```

### Improve Runoff Model

Replace simple coefficient with land use data:

```python
# Current: runoff_coefficient = 0.3
# Better: Load land use map and assign different coefficients
# Urban: 0.8, Forest: 0.1, Agriculture: 0.3
```

## 🌐 Web API Endpoints

If using FastAPI backend:

- `GET /simulate/{rainfall_mm}` - Run flood simulation
- `GET /geojson/{rainfall_mm}` - Get flood GeoJSON
- `GET /stats/{rainfall_mm}` - Get flood statistics

## 📈 Next Steps

1. **Better DEM Processing**: Use professional tools like GRASS GIS
2. **Real-time Data**: Integrate with weather APIs
3. **Validation**: Compare with historical flood data
4. **Mobile App**: Create React Native version
5. **3D Visualization**: Add Three.js 3D terrain view

## ⚠️ Limitations

This is a **simplified model** suitable for:

- Educational purposes
- Basic risk assessment
- Proof of concept

For **professional use**, consider:

- HEC-RAS for detailed hydraulic modeling
- LISFLOOD-FP for 2D flood simulation
- Consulting with hydrologists

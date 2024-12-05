# Polygon Area Calculator

An interactive application built using Next.js, Mapbox GL JS, and Turf.js.

## Features

-  **Draw Polygons**: Create shapes on the map.
-  **Calculate Area**: Automatically calculates the area of the drawn shape.
-  **Export GeoJSON**: Save polygons as GeoJSON.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/gakiokevin/learning-mapBox.git
cd learning-mapBox
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up the environment
- Create a `.env.local` file and add:
  ```env
  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
  ```

### 4. Run the development server
```bash
npm run dev
```

## Usage

1. Navigate to the application.
2. Draw a polygon on the map.
3. View the calculated area.
4. Export data as GeoJSON if needed.

## Technologies Used

- **Next.js**
- **Mapbox GL JS**
- **Turf.js**
- **Tailwind CSS**


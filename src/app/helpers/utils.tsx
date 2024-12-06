import * as turf from "@turf/turf";
import { Polygon } from "../types/interfaces";

import MapboxDraw from "@mapbox/mapbox-gl-draw";


export const updateArea = (e: React.SyntheticEvent,  // You can narrow this down based on the event
  drawRef: React.RefObject<MapboxDraw>,  // Typing for drawRef object
  setDrawnPolygon: React.Dispatch<React.SetStateAction<Polygon | null>>,  // State setter for Polygon
  setArea: React.Dispatch<React.SetStateAction<string | null>>) => {
  const data = drawRef.current!.getAll();
  if (data.features.length > 0) {
    const polygon: Polygon = data.features[0] as Polygon;
    setDrawnPolygon(polygon);
    const areaCalculated = turf.area(polygon);
    const areaInkm = (areaCalculated / 1000000).toFixed(2)// Convert area to square kilometers
    setArea(areaInkm); 
  } else {
    setArea(null);
    setDrawnPolygon(null);
  }
};

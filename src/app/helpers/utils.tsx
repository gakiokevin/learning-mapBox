import * as turf from "@turf/turf";

export const updateArea = (e: any, drawRef: any, setDrawnPolygon: any, setArea: any) => {
  const data = drawRef.current!.getAll();
  if (data.features.length > 0) {
    const polygon = data.features[0];
    setDrawnPolygon(polygon);
    const areaCalculated = turf.area(polygon);
    setArea((areaCalculated / 1000000).toFixed(2)); // Convert area to square kilometers
  } else {
    setArea(null);
    setDrawnPolygon(null);
  }
};

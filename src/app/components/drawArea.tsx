import React from "react";
import { Polygon } from "../types/interfaces";
interface DrawPolygonProps {
  drawnPolygon: Polygon | null;
  area: string | null;
}

const DrawPolygon:React.FC<DrawPolygonProps> = ({ drawnPolygon, area }) => {
  
  return (
    <div className="mb-5 font-bold text-center">
     
  {drawnPolygon
    ? "Polygon drawn! You can delete it by clicking the trash icon."
    : "Draw a polygon by clicking the map."}
  {area && (
    <div className="px-5 py-2 bg-blue-900 text-white rounded-md font-bold w-4/5 text-center mx-auto mb-5">
      Area of the drawn polygon: {area} km<sup>2</sup>
    </div>
  )}
</div>

  );
};

export default DrawPolygon;

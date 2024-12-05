import React from "react";

const ExportBtn = ({ drawnPolygon }: any) => {
  const exportGeoJSON = () => {
    if (!drawnPolygon) {
      alert("Please draw a polygon first!");
      return;
    }

    const geoJsonData = {
      type: "FeatureCollection",
      features: [drawnPolygon],
    };

    const blob = new Blob([JSON.stringify(geoJsonData)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "polygon.geojson";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
  onClick={exportGeoJSON}
  className="mx-2 my-3 px-4 py-2 bg-blue-900 text-white rounded-md font-bold text-center cursor-pointer hover:bg-blue-800"
>
  Export as GeoJSON
</button>

  );
};

export default ExportBtn;

'use client'
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { updateArea } from "../helpers/utils"; 
import { Polygon } from "../types/interfaces";


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

interface MapContainerProps {
  setDrawnPolygon: React.Dispatch<React.SetStateAction<Polygon | null>>;
  setArea: React.Dispatch<React.SetStateAction<string | null>>;
}

const MapContainer:React.FC<MapContainerProps> = ({ setDrawnPolygon, setArea }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const drawRef = useRef<MapboxDraw | null>(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [-74.006, 40.7128], 
      zoom: 10,
    });

    drawRef.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });

    mapRef.current.addControl(drawRef.current);

   
    mapRef.current.on("draw.create", (e) => updateArea(e, drawRef, setDrawnPolygon, setArea));
    mapRef.current.on("draw.delete", (e) => updateArea(e, drawRef, setDrawnPolygon, setArea));
    mapRef.current.on("draw.update", (e) => updateArea(e, drawRef, setDrawnPolygon, setArea));

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, [setDrawnPolygon, setArea]);

  return <div ref={mapContainerRef} className="w-[100%] h-[500px]"/>;
};

export default MapContainer;

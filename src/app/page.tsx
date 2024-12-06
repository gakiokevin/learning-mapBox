"use client"
import React, { useState } from "react";
import MapContainer from "./components/mapContainer";
import DrawPolygon from "./components/drawArea";
import ExportBtn from "./components/exportJson";
import { Polygon } from "./types/interfaces";

export default function Home() {

  const [drawnPolygon, setDrawnPolygon] = useState<Polygon | null>(null);
  const [area, setArea] = useState<string | null>(null);
  
  return (
    <div className=" min-h-screen w-full bg-[grey] pt-6">
      <h1 className=' text-center mb-5 text-2xl'>
        Map with Polygon Area Calculation
      </h1>
  <DrawPolygon  drawnPolygon={drawnPolygon} area={area}/>
    <ExportBtn drawnPolygon={drawnPolygon}/> 
    <MapContainer setDrawnPolygon={setDrawnPolygon} setArea={setArea} />
    </div>
  );
}


import type { Metadata } from "next";

import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";



export const metadata: Metadata = {
  title: "map-demo",
  description: "displaying map usig turfjs and mapbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=' h-full w-full'
      >
        {children}
      </body>
    </html>
  );
}


export interface Polygon {
    id?:  string | number | undefined;
    type: "Feature";
    properties: Record<string, unknown> | null;
    geometry: {
        type:'Polygon',
        coordinates: number[][][];
    }
  }
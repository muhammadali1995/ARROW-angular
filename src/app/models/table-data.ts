export interface Earthquake {
   source: string;
   earthquake_id: string;
   magnitude: number;
   depth: number;
   number_of_stations: number;
   region: string;
}

export const MAGNITUDES = [
   3, 4, 5, 6, 7
]
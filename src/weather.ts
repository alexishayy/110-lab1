import type { Weather } from "./types";

export function weatherType(): Weather {
    const x = Math.random();
    if (x < 0.4) return "sunny"; //0-4 sunny
    if (x < 0.7) return "cloudy"; //4-7 cloudy
    if (x < 0.9) return "rainy" //7-9 rainy
    return "hot";
}
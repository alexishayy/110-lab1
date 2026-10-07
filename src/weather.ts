import type { Weather } from "./types";

export function weatherType(): Weather {
    const x = Math.random();
    if (x < 0.4) return "sunny"; //0-4 sunny
    if (x < 0.7) return "cloudy"; //4-7 cloudy
    if (x < 0.9) return "rainy" //7-9 rainy
    return "hot";
}

//demand of customers based on weather
const baseDemand: Record<Weather, number> = {
    rainy: 10,
    cloudy: 30,
    sunny: 50,
    hot: 80,
};

//hot weather = more customers
export function demandFor(weather: Weather): number {
  return baseDemand[weather] + Math.floor(Math.random() * 21);
}
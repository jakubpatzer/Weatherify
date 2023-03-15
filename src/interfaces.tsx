
export interface Condition {
  text?: string;
  icon?: string;
}

export interface Day {
  [x: string]: any;
  date: string;
  date_epoch: number;
  day: DayData;
}

interface DayData {
  maxtemp_c: number;
  mintemp_c: number;
  daily_chance_of_rain: number;
  condition: Condition;
}

export interface City {
  name: string
}

export interface Current {
  condition: Condition;
  temp_c: number;
  feelslike_c: number;
  cloud: number;
  humidity: number;
  wind_kph: number;
}

export interface Forecast {
  forecastday: Day[];
}

export interface Weather {
  current: Current;
  forecast: Forecast;
}
import { WeatherContext } from "../Context";
import { useWeather } from "../Hooks";

export default function WeatherProvider({ children }) {
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}

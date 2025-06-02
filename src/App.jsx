import Page from "./Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./Provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;

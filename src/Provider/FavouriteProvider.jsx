import { FavouriteContext } from "../Context";
import { useLocalStorage } from "../Hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourite] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourite([...favourites, { latitude, longitude, location }]);
  };

  const removeFromFacourites = (location) => {
    const restFavorite = favourites.filter((fav) => fav.location !== location);
    setFavourite(restFavorite);
  };

  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFacourites, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;

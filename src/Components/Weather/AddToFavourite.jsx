import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FavouriteContext, WeatherContext } from "../../Context";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";

export default function AddToFavourtie() {
  const { addToFavourites, removeFromFacourites, favourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  const [isFavourite, setIsFavourite] = useState(false);

  const addFavouritesNotify = () => toast("Location Added Successfully 🎉🎉");
  const removeFavouritesNotify = () =>
    toast("Location Removed Successfully ✅✅");

  function handelFavourite() {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
      addFavouritesNotify();
    } else {
      removeFromFacourites(location);
      removeFavouritesNotify();
    }
    setIsFavourite(!isFavourite);
  }

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handelFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

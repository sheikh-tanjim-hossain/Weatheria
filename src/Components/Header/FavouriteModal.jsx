import { motion } from "motion/react";
import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../Context";

export default function FavouriteModal() {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);
  return (
    <motion.div
      key="fav"
      initial={{ transform: "translatey(-20px)", opacity: 0 }}
      animate={{ transform: "translatey(0px)", opacity: 1 }}
      exit={{ transform: "translatey(-20px)", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg "
    >
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li
              key={fav.location}
              className="hover:bg-gray-200"
              onClick={(e) => {
                e.preventDefault();
                setSelectedLocation({ ...fav });
              }}
            >
              {fav.location}
            </li>
          ))
        ) : (
          <p>Nothing is on favourites list</p>
        )}
      </ul>
    </motion.div>
  );
}

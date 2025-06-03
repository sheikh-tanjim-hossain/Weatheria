import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../Context";
import useDebounce from "../../Hooks/useDebounce";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  const [formValue, setFormValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const doSearch = useDebounce((searchTerm) => {
    setSearchLoading(false);
    setSearchValue(searchTerm);
  }, 500);

  function handleChange(e) {
    setSearchLoading(true);
    e.preventDefault();
    setFormValue(e.target.value);
    doSearch(e.target.value);
  }

  useEffect(() => {
    setSearchLoading(true);
    async function fetchSearchData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();

          setSearchResult([...data]);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchSearchData();
    setSearchLoading(false);
  }, [searchValue]);

  return (
    <div className="relative">
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
            onChange={handleChange}
            onFocus={() => {
              setShowSearch(true);
            }}
            onBlur={() => {
              setShowSearch(false);
            }}
            value={formValue}
          />
        </div>
      </form>

      {/* search result start */}

      <AnimatePresence>
        {showSearch && (
          <motion.div
            key="search"
            initial={{ transform: "translatey(-20px)", opacity: 0 }}
            animate={{ transform: "translatey(0px)", opacity: 1 }}
            exit={{ transform: "translatey(-20px)", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute mt-2 bg-white max-h-[150px] md:max-h-[200px] w-full overflow-y-auto"
          >
            {searchLoading ? (
              <div className="flex justify-center items-center h-[100px] md:h-[150px] bg-gray-200">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="animate-spin h-8 w-8 md:h-10 md:w-10"
                />
              </div>
            ) : (
              <>
                {searchResult.map((item) => (
                  <button
                    key={`${item.lat}+${item.lon}`}
                    className="block w-full text-start py-1 md:py-3 px-1 border border-b-black"
                    onClick={() => {
                      setSelectedLocation({
                        location: item.name,
                        latitude: item.lat,
                        longitude: item.lon,
                      });
                      console.log({
                        location: item.name,
                        latitude: item.lat,
                        longitude: item.lon,
                      });
                    }}
                  >
                    <h2 className="text-lg ">{item.name}</h2>
                    <p className="text-sm text-gray-700">
                      {item.state}
                      {item.state && ","} {item.country}
                    </p>
                  </button>
                ))}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

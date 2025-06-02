import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Favourite from "./Favourite";
import FavouriteModal from "./FavouriteModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFavModa, setShowFavModal] = useState(false);

  return (
    <header className="sticky w-full top-0 left-0 z-50 bg-gradient-to-b from-black/60 to-black/0 mb-auto">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite onShow={() => setShowFavModal(!showFavModa)} />

          <AnimatePresence>{showFavModa && <FavouriteModal />}</AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

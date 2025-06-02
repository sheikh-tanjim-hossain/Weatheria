/* eslint-disable react/prop-types */
import heartIcon from "../../assets/heart.svg";

export default function Favourite({ onShow }) {
  return (
    <div
      className="p-2 hover:fbg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onShow}
    >
      <img src={heartIcon} alt="" />
      <span className="hidden md:block">Favourite Locations</span>
    </div>
  );
}

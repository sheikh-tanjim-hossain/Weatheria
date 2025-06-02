import logoImage from "../../assets/Wearher.png";

export default function Logo() {
  return (
    <a href="#" className="flex flex-row text-white">
      <img className="h-12" src={logoImage} alt="Weather App" />
      <div className="mx-2">
        <h1 className="text-xl md:text-2xl uppercase">Weatheria</h1>
        <p className="text-white text-xs md:text-sm -mt-1">
          your everyday weather app
        </p>
      </div>
    </a>
  );
}

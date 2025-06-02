import logoImage from "../../assets/logo.svg";

export default function Logo() {
  return (
    <a href="#">
      <img className="h-9" src={logoImage} alt="Weather App" />
    </a>
  );
}

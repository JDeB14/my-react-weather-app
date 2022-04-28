export default function WeatherIcon(props) {
  const iconMapping = {
    Clear: "☀️",
    Clouds: "🌥",
    Rain: "🌧",
    Drizzle: "🌧",
    Thunderstorm: "⛈",
    Snow: "🌨",
    Mist: "🌫",
    Fog: "🌫",
    Smoke: "🌫",
    Haze: "🌫",
    Dust: "🌫",
    Sand: "🌫",
    Ash: "🌫",
    Squal: "🌫",
    Tornado: "🌪",
  };
  return iconMapping[props.iconDescription];
}

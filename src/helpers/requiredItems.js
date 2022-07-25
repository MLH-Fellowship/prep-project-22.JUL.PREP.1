import Raincoat from "../assets/img/raincoat.jpg";
import Umbrella from "../assets/img/umbrella.jpg";
import Cap from "../assets/img/cap.jpg";
import Gloves from "../assets/img/gloves.jpg";
import Mask from "../assets/img/mask.jpg";
import Goggles from "../assets/img/googles.jpg";
import SandScarf from "../assets/img/scarf.jpg";
import Flashlight from "../assets/img/flashlight.jpg";
import Jacket from "../assets/img/jacket.jpg";

import Lipbalm from "../assets/img/lipBalm.webp";
import WaterBottle from "../assets/img/bottle.webp";

const requiredItems = {
  Thunderstorm: {
    Raincoat: Raincoat,
    Flashlight: Flashlight,
  },
  Drizzle: {
    Raincoat: Raincoat,
    Umbrella: Umbrella,
  },
  Rain: {
    Raincoat: Raincoat,
    Umbrella: Umbrella,
  },
  Snow: {
    Gloves: Gloves,
    Jacket: Jacket,
  },
  Mist: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Smoke: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Haze: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Dust: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Fog: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Sand: {
    Mask: Mask,
    "Sand Scarf": SandScarf,
  },
  Ash: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Squall: {
    Goggles: Goggles,
    Mask: Mask,
  },
  Tornado: {
    Flashlight: Flashlight,
    Goggles: Goggles,
  },
  Clear: {
    Lipbalm: Lipbalm,
    "Water Bottle": WaterBottle,
  },
  Clouds: {
    "Baseball Cap": Cap,
    "Water Bottle": WaterBottle,
  },
};

export default requiredItems;

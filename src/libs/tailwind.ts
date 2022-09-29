import { create } from "twrnc";

export const {
  style: tw,
  color,
  prefixMatch,
  setWindowDimensions,
  setFontScale,
  setPixelDensity,
  setColorScheme,
} = create(require("../../tailwind.config.js"));

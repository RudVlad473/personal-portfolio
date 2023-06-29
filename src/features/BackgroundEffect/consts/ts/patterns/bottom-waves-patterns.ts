import { TBottomWave, TBottomWaves } from "../../../lib/types"
import { uniqueId } from "lodash"

const bottomWave1: TBottomWave = {
  fill: "#fa7268",
  d: "m0 93 108 55 108 50 108 25 108-77 108 50 108 35 108 18 108-113 108 56 108-111v560H0Z",
}
const bottomWave2: TBottomWave = {
  fill: "#f56a67",
  d: "m0 210 108 8 108 6 108-42 108 92 108-114 108 74 108 13 108 14 108-95 108 106v369H0Z",
}
const bottomWave3: TBottomWave = {
  fill: "#f06167",
  d: "m0 207 108 77 108-93 108 10 108 85 108-62 108-7 108 37 108-54 108 127 108-144v458H0Z",
}
const bottomWave4: TBottomWave = {
  fill: "#eb5967",
  d: "m0 282 108 27 108-47 108-3 108 28 108-39 108 108 108-95 108 10 108 99 108-46v317H0Z",
}
const bottomWave5: TBottomWave = {
  fill: "#e65067",
  d: "m0 411 108-13 108-91 108 93 108-96 108 92 108-11 108-31 108 51 108-65 108 16v285H0Z",
}
const bottomWave6: TBottomWave = {
  fill: "#e04867",
  d: "m0 364 108-20 108 32 108 22 108 41 108-65 108-5 108-18 108-18 108 19 108 94v195H0Z",
}
const bottomWave7: TBottomWave = {
  fill: "#da3f67",
  d: "m0 492 108-60 108 53 108-34 108-57 108 8 108-2 108 25 108 67 108-101 108 79v171H0Z",
}
const bottomWave8: TBottomWave = {
  fill: "#d43667",
  d: "m0 511 108-40 108-8 108-18 108 79 108-57 108 69 108-22 108-29 108-11 108 29v138H0Z",
}
const bottomWave9: TBottomWave = {
  fill: "#cd2d68",
  d: "m0 562 108 3 108-52 108 6 108-6 108 29 108-43 108 53 108 18 108-61 108 39v93H0Z",
}
const bottomWave10: TBottomWave = {
  fill: "#c62368",
  d: "m0 554 108-6 108 48 108-38 108 21 108 25 108-38 108-2 108 32 108-12 108-31v88H0Z",
}

export const BOTTOM_WAVES_PATTERNS: TBottomWaves = [
  bottomWave1,
  bottomWave2,
  bottomWave3,
  bottomWave4,
  bottomWave5,
  bottomWave6,
  bottomWave7,
  bottomWave8,
  bottomWave9,
  bottomWave10,
].map((pattern) => ({
  ...pattern,
  id: uniqueId("wave_"),
}))

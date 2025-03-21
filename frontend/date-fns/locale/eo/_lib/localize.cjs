"use strict";
exports.localize = void 0;

var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["aK", "pK"],
  abbreviated: ["a.K.E.", "p.K.E."],
  wide: ["antaŭ Komuna Erao", "Komuna Erao"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: [
    "1-a kvaronjaro",
    "2-a kvaronjaro",
    "3-a kvaronjaro",
    "4-a kvaronjaro",
  ],
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "aŭg",
    "sep",
    "okt",
    "nov",
    "dec",
  ],

  wide: [
    "januaro",
    "februaro",
    "marto",
    "aprilo",
    "majo",
    "junio",
    "julio",
    "aŭgusto",
    "septembro",
    "oktobro",
    "novembro",
    "decembro",
  ],
};

const dayValues = {
  narrow: ["D", "L", "M", "M", "Ĵ", "V", "S"],
  short: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"],
  abbreviated: ["dim", "lun", "mar", "mer", "ĵaŭ", "ven", "sab"],
  wide: [
    "dimanĉo",
    "lundo",
    "mardo",
    "merkredo",
    "ĵaŭdo",
    "vendredo",
    "sabato",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte",
  },
  abbreviated: {
    am: "a.t.m.",
    pm: "p.t.m.",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte",
  },
  wide: {
    am: "antaŭtagmeze",
    pm: "posttagmeze",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte",
  },
};

const ordinalNumber = (dirtyNumber) => {
  const number = Number(dirtyNumber);
  return number + "-a";
};

const localize = (exports.localize = {
  ordinalNumber: ordinalNumber,

  era: (0, _index.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0, _index.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    },
  }),

  month: (0, _index.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0, _index.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
});

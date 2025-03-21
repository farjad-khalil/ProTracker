import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const numberValues = {
  locale: {
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    0: "০",
  },
  number: {
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
    "০": "0",
  },
};

const eraValues = {
  narrow: ["খ্রিঃপূঃ", "খ্রিঃ"],
  abbreviated: ["খ্রিঃপূর্ব", "খ্রিঃ"],
  wide: ["খ্রিস্টপূর্ব", "খ্রিস্টাব্দ"],
};

const quarterValues = {
  narrow: ["১", "২", "৩", "৪"],
  abbreviated: ["১ত্রৈ", "২ত্রৈ", "৩ত্রৈ", "৪ত্রৈ"],
  wide: ["১ম ত্রৈমাসিক", "২য় ত্রৈমাসিক", "৩য় ত্রৈমাসিক", "৪র্থ ত্রৈমাসিক"],
};

const monthValues = {
  narrow: [
    "জানু",
    "ফেব্রু",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্ট",
    "অক্টো",
    "নভে",
    "ডিসে",
  ],

  abbreviated: [
    "জানু",
    "ফেব্রু",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্ট",
    "অক্টো",
    "নভে",
    "ডিসে",
  ],

  wide: [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ],
};

const dayValues = {
  narrow: ["র", "সো", "ম", "বু", "বৃ", "শু", "শ"],
  short: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
  abbreviated: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
  wide: [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার ",
    "শুক্রবার",
    "শনিবার",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "পূ",
    pm: "অপ",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত",
  },
  abbreviated: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত",
  },
  wide: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "পূ",
    pm: "অপ",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত",
  },
  abbreviated: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত",
  },
  wide: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত",
  },
};

function dateOrdinalNumber(number, localeNumber) {
  if (number > 18 && number <= 31) {
    return localeNumber + "শে";
  } else {
    switch (number) {
      case 1:
        return localeNumber + "লা";
      case 2:
      case 3:
        return localeNumber + "রা";
      case 4:
        return localeNumber + "ঠা";
      default:
        return localeNumber + "ই";
    }
  }
}

const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const localeNumber = numberToLocale(number);
  const unit = options?.unit;

  if (unit === "date") {
    return dateOrdinalNumber(number, localeNumber);
  }
  if (number > 10 || number === 0) return localeNumber + "তম";

  const rem10 = number % 10;
  switch (rem10) {
    case 2:
    case 3:
      return localeNumber + "য়";
    case 4:
      return localeNumber + "র্থ";
    case 6:
      return localeNumber + "ষ্ঠ";
    default:
      return localeNumber + "ম";
  }
};

// function localeToNumber(locale: string): number {
//   const enNumber = locale.toString().replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
//     return numberValues.number[match as keyof typeof numberValues.number]
//   })
//   return Number(enNumber)
// }

export function numberToLocale(enNumber) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match];
  });
}

export const localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};

import * as Localization from "expo-localization";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

export const i18n = new I18n({
  en: { DonateNow: "Donate Now" },
  ar: { DonateNow: "أتبرع الآن" },
});

i18n.locale = getLocales()[0].languageCode;
i18n.locale = Localization.locale; //depende on the language of the device
//i18n.locale = "ar"; // for check the arabic is done.
i18n.enableFallback = true;

console.warn(i18n.t("DonateNow"));

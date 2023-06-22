import * as Localization from "expo-localization";
//import i18n from "i18n-js";
import { I18n } from "i18n-js";
import en from "./locales/en/translations.json";
import ar from "./locales/ar/translations.json";

const i18n = new I18n({
  en,
  ar,
});

i18n.locale = Localization.locale; //depende on the language of the device
<<<<<<< HEAD
//i18n.locale = "ar"; // for check the arabic is done.
=======
// i18n.locale = "ar"; // for check the arabic is done.
>>>>>>> ce434b69b08ba73e0ec553719b26aa1a2c37c59a
i18n.enableFallback = true;

export default function t(key) {
  return i18n.t(key);
}
//console.warn(t("Donate Now"));

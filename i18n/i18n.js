import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from "./locales/en/translations.json";
import ar from "./locales/ar/translations.json"


i18n.defaultLocale = 'en';
i18n.translations = {
  en,
  ar,
};

i18n.locale = Localization.locale; //depende on the language of the device
//i18n.locale = "ar"; // for check the arabic is done.
i18n.enableFallback = true;

export default function t(key) {
  return i18n.t(key);
}
//console.warn(t("Donate Now"));

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "../assets/translations/en.json";
import translation_ru from "../assets/translations/ru.json";



i18n
	.use(initReactI18next)
		.init({
		fallbackLng: "ru",
		lng: 'ru',
		resources: {
			en: {
				translation: translation_en,
			},
			ru: {
				translation: translation_ru,
			}
		}
	});

export default i18n;

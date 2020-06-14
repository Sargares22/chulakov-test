import React from 'react'


export const HeaderLanguage = ({changeLang, language, t, i18n}) => {

	return (
		<div className="btn-group change-lang">
			<button className={`btn-group__item ${language === 'ru' ? 'active' : ''}`} onClick={() => {
				changeLang('ru')
				i18n.changeLanguage("ru")
			}}>{t("header.language_type.ru")}</button>
			<button className={`btn-group__item ${language === 'en' ? 'active' : ''}`} onClick={() => {
				changeLang('en')
				i18n.changeLanguage("en")
			}}>{t("header.language_type.en")}</button>
		</div>
	)
}

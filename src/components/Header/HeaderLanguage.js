import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next';

import { changeLanguage } from '../../redux/actions';


export const HeaderLanguage = () => {

	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();
	const language = useSelector(({app}) => app.language)

	return (
		<div className="btn-group change-lang">
			<button className={`btn-group__item ${language === 'ru' ? 'active' : ''}`} onClick={() => {
				dispatch(changeLanguage('ru'))
				return i18n.changeLanguage("ru")
			}}>{t("header.language_type.ru")}</button>
			<button className={`btn-group__item ${language === 'en' ? 'active' : ''}`} onClick={() => {
				dispatch(changeLanguage('en'))
				return i18n.changeLanguage("en")
			}}>{t("header.language_type.en")}</button>
		</div>
	)
}

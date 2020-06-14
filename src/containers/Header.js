import React from 'react'
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux'


import { HeaderDisplay } from '../components/Header/HeaderDisplay';
import { HeaderSort } from '../components/Header/HeaderSort';
import { HeaderLanguage } from '../components/Header/HeaderLanguage';
import { HeaderSearch } from '../components/Header/HeaderSearch';
import { HeaderFavourites } from '../components/Header/HeaderFavourites';
import { sortingBy, searchBy, changeDataDisplay, changeLanguage } from '../redux/actions';

export const Header = () => {

	const { t, i18n } = useTranslation();
	const dispatch = useDispatch();
	const {sorting: {sortingType, sortingOrder}, searchString, language, viewType} = useSelector(({app}) => app);

	const sortingData = (type, order) => dispatch(sortingBy(type, order))
	const handleSearchInput = (value) => dispatch(searchBy(value))
	const changeViewType = (value) => dispatch(changeDataDisplay(value))
	const changeLang = (value) => dispatch(changeLanguage(value))


	return (
		<header className="header">
			<div className="container">
				<div className="filters">
					<div className="filters__title">{t("header.sorting")}</div>
					<HeaderSort sortingData={sortingData} sortingType={sortingType} sortingOrder={sortingOrder} t={t}/>
				</div>
				<div className="display">
					<div className="display__title">{t("header.view")}</div>
					<HeaderDisplay t={t} changeViewType={changeViewType} viewType={viewType}/>
				</div>
				<div className="change-lang">
					<div className="change-lang__title">{t("header.language")}</div>
					<HeaderLanguage changeLang={changeLang} language={language} t={t} i18n={i18n}/>
				</div>
				<div className="favourites">
					<div className="favourites__title">{t("header.favourites")}</div>
					<HeaderFavourites/>
				</div>
				{/* TODO */}
				{/* <div className="theme-picker">
					<div className="theme-picker__title">{t("header.theme-picker")}</div>
					<div className="btn-group theme-picker">
						<button className="btn-group__item active grey"></button>
						<button className="btn-group__item red"></button>
						<button className="btn-group__item blue"></button>
					</div>
				</div> */}
				{/* TODO */}
				<div className="search">
					<div className="search__title">{t("header.search")}</div>
					<HeaderSearch handleSearchInput={handleSearchInput} searchString={searchString} t={t}/>
				</div>
			</div>
		</header>
	)
}

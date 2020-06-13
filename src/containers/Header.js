import React from 'react'
import { useTranslation } from 'react-i18next';

import { HeaderDisplay } from '../components/Header/HeaderDisplay';
import { HeaderSort } from '../components/Header/HeaderSort';
import { HeaderLanguage } from '../components/Header/HeaderLanguage';
import { HeaderSearch } from '../components/Header/HeaderSearch';
import { HeaderFavourites } from '../components/Header/HeaderFavourites';

export const Header = () => {

	const { t } = useTranslation();

	return (
		<header className="header">
			<div className="container">
				<div className="filters">
					<div className="filters__title">{t("header.sorting")}</div>
					<HeaderSort/>
				</div>
				<div className="display">
					<div className="display__title">{t("header.view")}</div>
					<HeaderDisplay/>
				</div>
				<div className="change-lang">
					<div className="change-lang__title">{t("header.language")}</div>
					<HeaderLanguage/>
				</div>
				<div className="favourites">
						<div className="favourites__title">{t("header.favourites")}</div>
						<HeaderFavourites/>
				</div>
				<div className="theme-picker">
					<div className="theme-picker__title">{t("header.theme-picker")}</div>
					<div className="btn-group theme-picker">
						<button className="btn-group__item active grey"></button>
						<button className="btn-group__item red"></button>
						<button className="btn-group__item green"></button>
					</div>
				</div>
				<div className="search">
					<div className="filter__title">{t("header.search")}</div>
					<HeaderSearch/>
				</div>
			</div>
		</header>
	)
}

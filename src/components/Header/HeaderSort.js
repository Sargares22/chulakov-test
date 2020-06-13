import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next';

import {sortingBy } from '../../redux/actions';
export const HeaderSort = () => {

	const dispatch = useDispatch();
	const {sortingType, sortingOrder} = useSelector(({app}) => app.sorting);
	const { t } = useTranslation();


	return (
		<>
			<div className="btn-group filter">
				<button className={`btn-group__item  ${sortingType === 'id' ? 'active': ''}`} onClick={() => dispatch(sortingBy('id'))}>{t("header.sort_type.id")}</button>
				<button className={`btn-group__item  ${sortingType === 'name' ? 'active': ''}`} onClick={() => dispatch(sortingBy('name'))}>{t("header.sort_type.name")}</button>
				<button className={`btn-group__item  ${sortingType === 'age' ? 'active': ''}`} onClick={() => dispatch(sortingBy('age'))}>{t("header.sort_type.age")}</button>
			</div>		
			<div className="btn-group sort">
				<button className={`btn-group__item  ${sortingOrder === 'asc' ? 'active': ''}`} onClick={() => dispatch(sortingBy(sortingType))}>{t("header.sort_type.asc")}</button>
				<button className={`btn-group__item  ${sortingOrder === 'desc' ? 'active': ''}`} onClick={() => dispatch(sortingBy(sortingType, 'desc'))}>{t("header.sort_type.desc")}</button>
			</div>
		</>
	)
}

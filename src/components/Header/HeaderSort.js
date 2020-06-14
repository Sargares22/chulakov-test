import React from 'react'

export const HeaderSort = ({sortingType, sortingOrder, sortingData, t}) => {

	return (
		<>
			<div className="btn-group filter">
				<button className={`btn-group__item  ${sortingType === 'id' ? 'active': ''}`} onClick={() => sortingData('id', sortingOrder)}>{t("header.sort_type.id")}</button>
				<button className={`btn-group__item  ${sortingType === 'name' ? 'active': ''}`} onClick={() => sortingData('name', sortingOrder)}>{t("header.sort_type.name")}</button>
				<button className={`btn-group__item  ${sortingType === 'age' ? 'active': ''}`} onClick={() => sortingData('age', sortingOrder)}>{t("header.sort_type.age")}</button>
			</div>		
			<div className="btn-group sort">
				<button className={`btn-group__item  ${sortingOrder === 'asc' ? 'active': ''}`} onClick={() => sortingData(sortingType)}>{t("header.sort_type.asc")}</button>
				<button className={`btn-group__item  ${sortingOrder === 'desc' ? 'active': ''}`} onClick={() => sortingData(sortingType, 'desc')}>{t("header.sort_type.desc")}</button>
			</div>
		</>
	)
}

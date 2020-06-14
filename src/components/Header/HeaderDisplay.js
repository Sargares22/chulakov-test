import React from 'react'


export const HeaderDisplay = ({changeViewType, viewType, t}) => {

	return (
		<div className="btn-group display">
			<button className={`btn-group__item ${viewType === 'table' ? 'active' : ''}`} onClick={() => changeViewType('table')}>{t("header.view_type.table")}</button>
			<button className={`btn-group__item ${viewType === 'preview' ? 'active' : ''}`} onClick={() => changeViewType('preview')}>{t("header.view_type.preview")}</button>
		</div>	
	)
}

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next';

import { changeDataDisplay } from '../../redux/actions';


export const HeaderDisplay = () => {
	const dispatch = useDispatch();
	const viewType = useSelector(({app}) => app.viewType);
	const { t } = useTranslation();

	return (
		<div className="btn-group display">
			<button className={`btn-group__item ${viewType === 'table' ? 'active' : ''}`} onClick={() => dispatch(changeDataDisplay('table'))}>{t("header.view_type.table")}</button>
			<button className={`btn-group__item ${viewType === 'preview' ? 'active' : ''}`} onClick={() => dispatch(changeDataDisplay('preview'))}>{t("header.view_type.preview")}</button>
		</div>	
	)
}

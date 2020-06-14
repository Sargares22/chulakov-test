import React from 'react'
import { useTranslation } from 'react-i18next';

import { translateAge } from '../helpers/functions';


export default React.memo(({data, viewType, ind, toggleFavourite}) => {

	const {favourite, age, image, name, phone, phrase, video } = data
	const isPreview = viewType === 'preview'
	const { t } = useTranslation();
	

	
	
	return (
			<li 
				className={`main-data__item ${isPreview && video ? 'video': ''}`}
			>
				<div className="main-data__text-block">
					<div className="main-data__icon">
						<img src={`/images/${image}.svg`} alt={image} />
					</div>
					<div className="main-data__name">{name}</div>
					<div className="main-data__age">{age} {t(`main.age_type.${translateAge(age)}`)}</div>
					<div className="main-data__phone">{phone}</div>
					<div className="main-data__star "><i  onClick={() => toggleFavourite(data, favourite)} className={`star ${favourite ? 'active': ''}`}></i></div>
					<div className="main-data__phrase">{phrase}</div>
				</div>

				{isPreview && video && <div className="main-data__video">
					<video controls preload={'none'} loop >
						<source src={`/videos/${video}.mp4`} type="video/mp4" />
					</video>
				</div>}
			</li>
	)
})
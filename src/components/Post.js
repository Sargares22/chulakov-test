import React from 'react'
import { useTranslation } from 'react-i18next';

import * as icons from '../helpers/exportSvg'
import boy from '../assets/videos/boy.mp4'
import shoe from '../assets/videos/shoe.mp4'
import { translateAge } from '../helpers/functions';
// import images from "../assets/images/*.svg";

// let gridRow = -1

export default React.memo(({data, viewType, ind, toggleFavourite}) => {

	const {favourite, age, image, name, phone, phrase, video } = data
	const Icon = icons[image]
	const isPreview = viewType === 'preview'
	const { t } = useTranslation();
	

	
	
	return (
			<li 
				className={`main-data__item ${isPreview && video ? 'video': ''}`}
			>
				<div className="main-data__text-block">
					<div className="main-data__icon">
						<Icon />
					</div>
					<div className="main-data__name">{name}</div>
					<div className="main-data__age">{age} {t(`main.age_type.${translateAge(age)}`)}</div>
					<div className="main-data__phone">{phone}</div>
					<div className="main-data__star " onClick={() => toggleFavourite(data, favourite)}><i className={`star ${favourite ? 'active': ''}`}></i></div>
					<div className="main-data__phrase">{phrase}</div>
				</div>

				{isPreview && video && <div className="main-data__video">
					<video controls preload={'none'} loop >
						<source src={video === 'boy' ? boy : shoe} type="video/mp4" />
					</video>
				</div>}
			</li>
	)
})
import { useState, useEffect, useCallback } from 'react';

export const useListObserver = (containerId, viewType) => {
	// console.log(containerId);
	
	const [ observer, setObserver ] = useState(null);
	useEffect(() => {
		const newObserver = new IntersectionObserver((entries) => {
	
			entries.forEach((entry) => {
				
				if(entry.isIntersecting){
					entry.target.classList.add('fadeIn');
				}
			});
		},{
			rootMargin: '0px',
			threshold: 0.2
		});
		setObserver(newObserver);
		return () => newObserver.disconnect();
	}, []);

	const observeList = useCallback(() => {

		if(!observer) return;
			
		document.getElementById(containerId).childNodes.forEach((node) => {
			node.classList.remove('fadeIn');
			if(node.offsetTop < window.pageYOffset + window.innerHeight && node.offsetTop > window.pageYOffset - node.offsetHeight)
				node.classList.add('fadeIn');
		});
		document.getElementById(containerId).childNodes.forEach((node) => {
			observer.observe(node);
		});
	}, [ containerId, viewType, observer]);

	return {
		observeList,
	}
}

export const useVideoObserver = (containerId) => {
	const [ observer, setObserver ] = useState(null);
	const [ videos, setVideos ] = useState([]);

	useEffect(() => {
		const newObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(entry.isIntersecting)
					entry.target.play();
				else
				entry.target.pause();
			});
		}, {
			rootMargin: '-40% 0% -40% 0%',
			threshold: 0
		});
		setObserver(newObserver);
		return () => newObserver.disconnect();
	}, []);

	const stopOthersVideos = useCallback((playedVideo) => {
		videos.forEach((video) => {
			if(video === playedVideo){
				return;
			}
			if(!video.paused)
				video.pause();
		});
	}, [videos])

	useEffect(() => {
		videos.forEach((video) => {
			video.onplay = (e) => stopOthersVideos(e.target);
		})
	}, [videos, stopOthersVideos]);

	const observeVideos = useCallback(() => {
		if(!observer)
			return;
		const currentVideos = [];
		document.getElementById(containerId).childNodes.forEach((node) => {
			if(!node.childNodes[1])
				return;
			if(node.childNodes[1].childNodes[0].tagName === 'VIDEO'){
				const video = node.childNodes[1].childNodes[0];
				observer.observe(video);
				currentVideos.push(video);
			}
		});
		setVideos(currentVideos);
	}, [containerId, observer]);

	return {
		observeVideos,
	}
}

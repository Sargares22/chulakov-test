import Fuse from "fuse.js";

export const basePath = true ? '/chulakov-test': ''

export const getValueFromUrl = text => new URLSearchParams(window.location.search).get(text);

export const translateAge = age => {

	const lastDigit = age % 10;

	if (lastDigit === 1) {
	 	return 'year';
	}
	if (lastDigit > 1 && lastDigit < 5) {
	  	return 'year1';
	}
		return 'years';
	};

export const sortingByType = (users, sortingType) => {
	const sortingFunction = (a, b) => {
  
	  let first = a[sortingType];
	  let second = b[sortingType];
  
	  if (typeof first === 'string' || typeof second === 'string') {
		  first = first.toLowerCase();
		  second = second.toLowerCase();
	  }
	  if (first <= second) return -1;
  
	  return 1;
  };
  return [...users].sort(sortingFunction)

}

export const fuseSearch = (data, searchString) => {
	let fuse = new Fuse(data, {
		// minMatchCharLength: 3,
		useExtendedSearch: true,
		threshold: 0.25,
		shouldSort: false,
		keys: ["name"]
	});

	return fuse.search(searchString).map(({item}) => item)
}	
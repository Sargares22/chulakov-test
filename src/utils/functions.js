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

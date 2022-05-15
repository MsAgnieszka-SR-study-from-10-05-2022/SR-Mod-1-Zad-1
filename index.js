import isLeapYear from 'leap-year';

const YEAR = 2022;
const responseAboutLeapYear = isLeapYear(YEAR);
	if (responseAboutLeapYear === true) {
		 console.log(`${YEAR} is a leap-year.`);
	} else {
		 console.log(`${YEAR} is not a leap-year.`);
	};
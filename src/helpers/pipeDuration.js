const convertMinutes = (mins) => {
	let m = mins % 60;
	let h = (mins - m) / 60;
	let hhmm =
		(h < 10 ? '0' : '') +
		h.toString() +
		':' +
		(m < 10 ? '0' : '') +
		m.toString();

	return hhmm;
};

export default convertMinutes;
